import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'demo',
  resolve: {
    alias: {
      'marquee-react-dwyer': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../demo-dist',
    emptyOutDir: true
  }
});
