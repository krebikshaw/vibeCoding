import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 設定 @ 對應到 src/
    },
  },
  base: '/vibeCoding/', // ⚠️ GitHub Pages 專用
})
