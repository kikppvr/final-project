import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/", // เพิ่ม base URL สำหรับ GitHub Pages
    plugins: [react()],
});
