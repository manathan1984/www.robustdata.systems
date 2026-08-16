import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Robust Data Systems site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Robust Data Systems/);
  assert.match(html, /18 years in data systems/);
  assert.match(html, /Data systems/);
  assert.match(html, /Dependable/);
  assert.match(html, /Storage engine architecture/);
  assert.match(html, /A data store succeeds/);
  assert.match(html, /Privacy &amp; observability/);
  assert.match(html, /Make guarantees observable/);
  assert.match(html, /data stewardship/);
  assert.match(html, /Data systems · Storage engines · Performance · Indexing/);
  assert.match(html, /mailto:info@robustdata\.systems/);
  assert.match(html, /Multiple NSF awards/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
