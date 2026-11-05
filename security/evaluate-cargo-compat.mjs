import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [baseline, candidate, repository, flywheelRoot, output] = process.argv.slice(2);
if (![baseline, candidate, repository, flywheelRoot, output].every(Boolean)) {
  throw new Error("usage: evaluate-cargo-compat.mjs BASELINE CANDIDATE REPOSITORY FLYWHEEL_ROOT OUTPUT");
}

const flywheel = await import(pathToFileURL(resolve(flywheelRoot, "dist/index.js")));
const {
  makeSigner,
  meetsPromotionRule,
  runFlywheelGenerations,
  verifyReplayBundle,
} = flywheel;

const verifier = resolve("security/verify-cargo-compat.sh");
const canonicalManifest = "crates/llm-cost-ops/Cargo.toml";

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function gitShow(revision, path) {
  return execFileSync("git", ["show", `${revision}:${path}`], {
    cwd: repository,
    encoding: "utf8",
  });
}

function evaluateHoldout(revision, count) {
  const work = mkdtempSync(join(tmpdir(), "cost-ops-flywheel-"));
  let passed = false;
  try {
    execFileSync("bash", [verifier, "https://github.com/LLM-Dev-Ops/cost-ops", revision, work], {
      cwd: repository,
      env: process.env,
      stdio: "pipe",
    });
    passed = true;
  } catch {
    passed = false;
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
  const outcomes = Array(count).fill(passed);
  return {
    primary: passed ? 1 : 0,
    noopRate: passed ? 0 : 1,
    costPerWin: 0,
    regressed: false,
    pairedOutcomes: outcomes,
  };
}

function evaluateAnchor(revision, count) {
  const manifest = gitShow(revision, canonicalManifest);
  const packageName = /^name = "llm-cost-ops"$/m.test(manifest);
  const version = /^version = "0\.1\.1"$/m.test(manifest);
  const libraryName = /^name = "llm_cost_ops"$/m.test(manifest);
  const candidateFacadeMatches = revision === baseline || (
    /^name = "cost-ops"$/m.test(gitShow(revision, "crates/cost-ops-compat/Cargo.toml")) &&
    /^version = "0\.1\.1"$/m.test(gitShow(revision, "crates/cost-ops-compat/Cargo.toml"))
  );
  const originalTestsRetained = process.env.ORIGINAL_TESTS_RETAINED === "true";
  const outcomes = [packageName, libraryName, version, candidateFacadeMatches, originalTestsRetained];
  const passed = outcomes.filter(Boolean).length;
  return {
    primary: passed / count,
    noopRate: 0,
    costPerWin: 0,
    regressed: passed !== count,
    pairedOutcomes: outcomes,
  };
}

const holdout = {
  id: "cargo-package-compat-holdout-v1",
  items: ["resolve", "compile-import", "reexport-types"],
};
const anchor = {
  id: "canonical-package-anchor-v1",
  items: ["package-name", "library-name", "version", "facade-version", "original-tests"],
};

const result = await runFlywheelGenerations({
  rootPolicy: { revision: baseline },
  proposer: async (base) => ({
    value: candidate,
    summary: "Add a non-published cost-ops facade that re-exports the canonical llm-cost-ops API",
    inverse: {
      path: "revision",
      parentBytes: base.policy.revision,
      hash: sha256(base.policy.revision),
    },
  }),
  evaluator: async (policy, suite) => suite.id === holdout.id
    ? evaluateHoldout(policy.revision, suite.items.length)
    : evaluateAnchor(policy.revision, suite.items.length),
  promotionRule: meetsPromotionRule,
  holdout,
  anchor,
  mutationTargets: ["revision"],
  maxGenerations: 1,
  signer: makeSigner(),
  dataSource: "LIVE",
  cacheEvaluations: true,
  now: (generation) => `2026-10-21T00:00:0${generation}Z`,
  rootId: `cost-ops-${baseline.slice(0, 12)}`,
});

const replay = verifyReplayBundle(result.replayBundle);
const report = {
  baseline,
  candidate,
  dataSource: result.replayBundle.data_source,
  liftCurve: result.liftCurve,
  promotions: result.promotions.map(({ id, verdict, failureReasons }) => ({ id, verdict, failureReasons })),
  replay,
  replayBundle: result.replayBundle,
};
writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ liftCurve: report.liftCurve, replay: report.replay }));
