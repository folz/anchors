import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  server: {
    port: 1234,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@folz/anchors': path.resolve(__dirname, '../anchors/src/index.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    root: './test',
    setupFiles: ['./setupTests.ts'],
    globals: true,
  },
  define: {
    __DEV__: true,
  },
});
