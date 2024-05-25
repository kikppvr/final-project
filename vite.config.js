import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    base: "/", // เพิ่ม base URL สำหรับ GitHub Pages
    server: {
        proxy: {
            "/api": {
                target: "https://crudcrud.com/api/696fff48e611487a92912a5d31fd2490",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
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
