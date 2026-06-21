import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const siteUrl = "https://kristenpalmermd.com";
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/work", priority: "0.9", changefreq: "monthly" },
  { path: "/in-development", priority: "0.8", changefreq: "monthly" },
  { path: "/systems", priority: "0.8", changefreq: "monthly" },
  { path: "/education", priority: "0.8", changefreq: "monthly" },
  { path: "/speaking", priority: "0.8", changefreq: "monthly" },
  { path: "/awards", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

const articlesSource = readFileSync(resolve(root, "src/data/articles.ts"), "utf8");
const articleIds = [...articlesSource.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);

const urls = [
  ...staticRoutes.map(({ path, priority, changefreq }) => ({ path, priority, changefreq })),
  ...articleIds.map((id) => ({
    path: `/article/${id}`,
    priority: "0.6",
    changefreq: "monthly",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(root, "public/sitemap.xml"), sitemap);
console.log(`Generated sitemap with ${urls.length} URLs → public/sitemap.xml`);
