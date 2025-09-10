import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@/components': path.resolve(__dirname, './components'),
      '@/imports': path.resolve(__dirname, './imports'),
      '@/styles': path.resolve(__dirname, './styles'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'sonner'],
          export: ['html2canvas'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'html2canvas', 'lucide-react'],
  },
})