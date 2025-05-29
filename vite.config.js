import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    target: 'esnext'
  },
  server: {
    port: 3000,
    open: true
  },
  // other configurations...
}) 