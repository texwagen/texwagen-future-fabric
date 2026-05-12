// Renders the home page through the built SSR bundle and writes
// dist/client/index.html so the site can be deployed as a static
// site on Vercel (or any static host).
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const serverEntry = resolve("dist/server/index.js");
if (!existsSync(serverEntry)) {
  console.error("Build output missing:", serverEntry);
  process.exit(1);
}

const mod = await import(serverEntry);
const handler = mod.default ?? mod;
const fetchFn = typeof handler === "function" ? handler : handler.fetch;

if (typeof fetchFn !== "function") {
  console.error("No fetch handler exported from server bundle");
  process.exit(1);
}

const req = new Request("https://localhost/");
const res = await fetchFn(req, {}, {});
const html = await res.text();

if (!res.ok) {
  console.error("Prerender failed", res.status, html.slice(0, 200));
  process.exit(1);
}

const outDir = resolve("dist/client");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "index.html"), html, "utf8");
console.log("Wrote dist/client/index.html (", html.length, "bytes )");
