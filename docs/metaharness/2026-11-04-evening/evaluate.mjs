import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { performance } from 'node:perf_hooks';

const [baseline, candidate, modulePath, outputPath] = process.argv.slice(2);
const { runFlywheelGenerations, meetsPromotionRule, gateFingerprint, makeSigner,
  verifyReplayBundle } = await import(pathToFileURL(modulePath));
const baselineSHA = '3871153deff5da3ed6ad27c9052df383223c14e3';
const candidateSHA = '2d4a2fb52e7276ed6f5d72fa07c9a075a0d04e41';
const evaluations = [];
function probe(directory) {
  const start = performance.now();
  const command = ['node', 'audit-probe.cjs'];
  const result = spawnSync(command[0], command.slice(1), {
    cwd: directory, encoding: 'utf8', timeout: 15000,
  });
  const elapsedMs = performance.now() - start;
  if (![0, 1].includes(result.status)) throw new Error(result.stderr || 'Probe did not complete');
  const measurement = JSON.parse(result.stdout.trim().split('\n').at(-1));
  return { command, directory, exit: result.status, elapsedMs, ...measurement };
}
const trials = [];
for (let i = 0; i < 5; i++) {
  for (const revision of (i % 2 ? ['candidate', 'baseline'] : ['baseline', 'candidate'])) {
    trials.push({ trial: i, revision, ...probe(revision === 'baseline' ? baseline : candidate) });
  }
}
const blocked = [
  'Typecheck fails on cross-agent rootDir and unresolved sibling types',
  'Production npm audit reports moderate vulnerabilities',
  'cargo test --locked --lib exits 101: Cargo.lock requires update',
  'Ruflo agent_execute failed: no configured LLM provider',
  'Required repository CI and approvals are not proven passing',
];
const parentBytes = readFileSync(`${baseline}/src/handler.ts`, 'utf8');
const result = await runFlywheelGenerations({
  rootPolicy: { revision: baselineSHA },
  proposer: async () => ({ value: candidateSHA,
    summary: 'Audit outcomes follow HTTP failure status; build and test source deterministically',
    inverse: { path: 'functions/costops-agents/src/handler.ts', parentBytes,
      hash: createHash('sha256').update(parentBytes).digest('hex') } }),
  evaluator: async (policy, suite) => {
    const measured = probe(policy.revision === baselineSHA ? baseline : candidate);
    evaluations.push({ revision: policy.revision, suite: suite.id, ...measured });
    const itemWins = suite.id === 'audit-outcomes' ? measured.cases.map(x => x.pass) : measured.anchors;
    return { primary: itemWins.filter(Boolean).length / itemWins.length,
      noopRate: 0, costPerWin: 0,
      // Fail-closed complete acceptance flag, NOT a claim of a new behavioral regression.
      regressed: blocked.length > 0, itemWins };
  },
  promotionRule: meetsPromotionRule,
  holdout: { id: 'audit-outcomes', items: [200, 201, 400, 401, 429, 500, 503, 'schema400', 'json502'] },
  anchor: { id: 'response-preservation', items: Array.from({ length: 9 }, (_, i) => i) },
  maxGenerations: 1, signer: makeSigner(), dataSource: 'LIVE_NATIVE_HANDLER_LOOPBACK',
});
const fingerprint = gateFingerprint(meetsPromotionRule);
const replay = verifyReplayBundle(result.replayBundle, { pinnedGateFingerprint: fingerprint });
writeFileSync(outputPath, JSON.stringify({
  source: { baseline: baselineSHA, candidate: candidateSHA },
  blocked, measurementNotes: ['No latency or cost improvement claimed',
    'noopRate/costPerWin zero are neutral unmeasured axes, not measured savings',
    'regressed flags unavailable full acceptance gates, not a newly detected source regression'],
  trials, evaluations, gateFingerprint: fingerprint, replay,
  generationsRun: result.generationsRun, promotions: result.promotions,
  liftCurve: result.liftCurve, replayBundle: result.replayBundle,
}, null, 2) + '\n');
console.log(JSON.stringify({ trials: trials.length, evaluations: evaluations.length,
  generationsRun: result.generationsRun, replay, lineageCommits: result.promotions.length }));
