import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase this limit if necessary
  },
  server: {
    proxy: {
      '/posts': {
        target: 'https://realestatemern-1-qgpr.onrender.com',
        changeOrigin: true,
      }
    }
  }
});
