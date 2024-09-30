// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "custom-dropdown": resolve(__dirname, 'custom-dropdown/index.html'),
      },
    },
  },
})