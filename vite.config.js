import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/final-project/", // เพิ่ม base URL สำหรับ GitHub Pages
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                404: "public/404.html", // คัดลอกไฟล์ 404.html ไปยังโฟลเดอร์ dist
            },
        },
    },
});
