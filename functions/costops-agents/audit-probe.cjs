// Native handler + real loopback HTTP backend; no mocked handler or fetch.
const http = require('node:http');
const assert = require('node:assert/strict');
const path = require('node:path');
const cases = [];
const anchors = [];
const server = http.createServer((req, res) => {
  res.writeHead(server.statusCode, { 'Content-Type': 'application/json' });
  res.end(server.malformed ? 'not json' : JSON.stringify({ backend: true }));
});
server.listen(0, '127.0.0.1', async () => {
  process.env.CORE_API_URL = `http://127.0.0.1:${server.address().port}`;
  const { handler } = require(path.resolve(process.argv[2] || 'dist/index.js'));
  const body = {
    historical_data: Array.from({ length: 7 }, (_, i) => ({
      timestamp: `2024-01-0${i + 1}T00:00:00Z`, total_cost: 100,
    })), forecast_horizon_days: 7,
  };
  async function invoke(status, invalid = false, malformed = false) {
    server.statusCode = status;
    server.malformed = malformed;
    let code, output;
    const res = {
      set() { return this; }, status(value) { code = value; return this; },
      json(value) { output = value; return this; }, send(value) { output = value; return this; },
    };
    await handler({ method: 'POST', path: '/v1/costops/forecast',
      headers: { 'x-correlation-id': 'frozen-audit-anchor' }, body: invalid ? {} : body }, res);
    const expectedCode = invalid ? 400 : malformed ? 502 : status;
    const layer = output.layers_executed[1];
    anchors.push(code === expectedCode && output.execution_metadata.trace_id === 'frozen-audit-anchor'
      && output.layers_executed[0].status === 'completed' && layer.layer === 'COSTOPS_FORECAST'
      && Number.isFinite(layer.duration_ms));
    cases.push({ status: expectedCode, actual: layer.status,
      pass: layer.status === (expectedCode >= 400 ? 'failed' : 'completed') });
  }
  try {
    for (const code of [200, 201, 400, 401, 429, 500, 503]) await invoke(code);
    await invoke(200, true);
    await invoke(200, false, true);
    assert.equal(cases.length, 9);
    console.log(JSON.stringify({ cases, passed: cases.filter(x => x.pass).length,
      anchors, anchorsPassed: anchors.filter(Boolean).length }));
    server.close();
    process.exit(anchors.every(Boolean) && cases.every(x => x.pass) ? 0 : 1);
  } catch (error) {
    console.error(error); server.close(); process.exit(2);
  }
});
