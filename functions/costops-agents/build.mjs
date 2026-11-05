import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

// Imported agent sources live outside this package. Resolve their shared
// dependencies from this package's lockfile instead of ambient root installs.
await build({
  entryPoints: ['src/index.ts'], bundle: true, platform: 'node', target: 'node20',
  outfile: 'dist/index.js', format: 'cjs',
  external: ['@google-cloud/functions-framework'],
  nodePaths: [fileURLToPath(new URL('./node_modules', import.meta.url))],
});
// Never execute a stale committed test bundle after editing its source.
await build({
  entryPoints: ['src/handler.test.ts'], platform: 'node', target: 'node20',
  outfile: 'dist/handler.test.js', format: 'cjs',
});
