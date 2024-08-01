import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import favicons from "astro-favicons";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import embeds from "astro-embed/integration";
import betterImageService from "astro-better-image-service";
import compressor from "astro-compressor";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.net",
  integrations: [
    embeds(),
    mdx(),
    tailwind(),
    favicons({
      masterPicture: "public/logo-white.jpg",
      emitAssets: true,
      faviconsDarkMode: false,
    }),
    sitemap(),
    betterImageService(),
    (await import("@playform/compress")).default({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: false,
    }),
    compressor(),
  ],
});
