import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";
import { pageMeta, SITE } from "./src/data/siteMeta.ts";

// Design Read: premium editorial guide for Chinese tea drinkers
export default defineConfig({
  site: SITE.url,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404") && !page.includes("/privacy"),
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        const meta = pageMeta[path] ?? pageMeta[path.replace(/\/$/, "")];
        if (meta) item.lastmod = new Date(meta.lastmod);
        return item;
      },
    }),
  ],
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
});
