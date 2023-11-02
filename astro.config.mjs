import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";

// import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4000,
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          output: "mathml",
        },
      ],
    ],
    syntaxHighlight: "prism",
  },
  integrations: [sitemap()],
  site: "https://nicholasjohnson.com",
  trailingSlash: "never",
});
