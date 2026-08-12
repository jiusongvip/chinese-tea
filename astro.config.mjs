// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Design Read: premium-consumer informational landing for tea beginners
// Dial: VARIANCE=7 MOTION=5 DENSITY=4
export default defineConfig({
  site: "https://chinese-tea.com",
  trailingSlash: "never",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
