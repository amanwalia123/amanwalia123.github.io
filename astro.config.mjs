// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://amanwalia123.github.io",
    // IMPORTANT: base is not needed because your repo is username.github.io
    vite: {
        plugins: [tailwindcss()],
    },
});