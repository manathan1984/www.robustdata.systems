import { copyFile, writeFile } from "node:fs/promises";

const pagesBaseUrl = process.env.PAGES_BASE_URL;
const basePath = (
  pagesBaseUrl ? new URL(pagesBaseUrl).pathname : process.env.PAGES_BASE_PATH ?? ""
).replace(/\/$/, "");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://robustdata.systems/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static export failed with status ${response.status}`);
}

let html = await response.text();

// The page has no client-side application state. Removing runtime scripts makes
// the exported result portable and eliminates calls to a server that Pages does
// not provide.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "");

if (basePath) {
  html = html
    .replace(/\b(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/\bcontent="\/(?!\/)/g, `content="${basePath}/`);
}

await writeFile(new URL("../dist/client/index.html", import.meta.url), html);
await copyFile(
  new URL("../dist/client/index.html", import.meta.url),
  new URL("../dist/client/404.html", import.meta.url),
);
await writeFile(new URL("../dist/client/.nojekyll", import.meta.url), "");

console.log(`Static site exported${basePath ? ` at ${basePath}` : " at /"}.`);
