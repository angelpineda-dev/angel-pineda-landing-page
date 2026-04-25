import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://angelpineda.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/es/"),
      serialize(item) {
        item.changefreq = "monthly";
        item.lastmod = new Date();
        item.priority = item.url.endsWith("/en/") ? 0.8 : 1.0;
        return item;
      },
    }),
  ],
});
