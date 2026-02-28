// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://amanwalia123.github.io",
    integrations: [sitemap()],
    // IMPORTANT: base is not needed because your repo is username.github.io
    vite: {
        plugins: [tailwindcss()],
    },
});