import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const SITE = "https://nicholasjohnson.com";
const DIST = "dist";
const REDIRECTS = "public/_redirects";

function parseRedirects(text) {
  const rules = [];
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const parts = line.split(/\s+/);
    if (parts.length < 2) continue;
    let from = parts[0];
    let to = parts[1];
    if (!from.startsWith("/")) from = `/${from}`;
    if (!to.startsWith("/") && !/^https?:\/\//.test(to)) to = `/${to}`;
    rules.push({ from, to });
  }
  return rules;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function escapeJs(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}

function redirectPage(to) {
  const abs = /^https?:\/\//.test(to) ? to : `${SITE}${to}`;
  const href = escapeHtml(to);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Redirecting…</title>
    <link rel="canonical" href="${escapeHtml(abs)}">
    <meta http-equiv="refresh" content="0;url=${href}">
    <script>location.replace('${escapeJs(to)}')</script>
  </head>
  <body>
    <p>Redirecting to <a href="${href}">${href}</a></p>
  </body>
</html>
`;
}

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const rules = parseRedirects(await readFile(REDIRECTS, "utf8"));
let written = 0;
let skipped = 0;

for (const { from, to } of rules) {
  const relative = from.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!relative) {
    skipped += 1;
    continue;
  }

  const file = path.join(DIST, relative, "index.html");
  if (await exists(file)) {
    skipped += 1;
    continue;
  }

  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, redirectPage(to));
  written += 1;
}

console.log(`Redirects: wrote ${written}, skipped ${skipped}`);
