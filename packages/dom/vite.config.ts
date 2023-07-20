import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  server: {
    port: 1234,
  },
  root: './test/visual',
  plugins: [react()],
  resolve: {
    alias: {
      '@folz/anchors': path.resolve(__dirname, '../dom/src/index.ts'),
      '@folz/anchors-react': path.resolve(
        __dirname,
        '../react-dom/src/index.ts'
      ),
    },
  },
  test: {
    environment: 'jsdom',
    root: './test/unit',
    globals: true,
  },
});
