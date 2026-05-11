import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: false,
    open: false,
    cors: true,
    hmr: {
      host: 'localhost',
      port: 8080,
      protocol: 'ws'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
  }
})
