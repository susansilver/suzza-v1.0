import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import favicons from "astro-favicons";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://suzza.net',
  integrations: [mdx(), tailwind(), favicons({
    masterPicture: "public/logo-white.jpg",
    emitAssets: true,
    faviconsDarkMode: false,
  })]
});