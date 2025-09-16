import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: '/',
  define: {
    global: 'globalThis',
    'process.env': process.env,
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      util: 'util',
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['crypto-browserify', 'stream-browserify', 'util'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}); 