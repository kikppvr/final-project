import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    base: "/", // เพิ่ม base URL สำหรับ GitHub Pages
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/*",
                    dest: "assets",
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
