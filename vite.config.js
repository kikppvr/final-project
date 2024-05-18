import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/final-project/', // เพิ่ม base URL สำหรับ GitHub Pages
  plugins: [react()],
})