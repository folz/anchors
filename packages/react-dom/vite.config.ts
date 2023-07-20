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
      '@floating-ui/dom': path.resolve(__dirname, '../dom/src/index.ts'),
      '@floating-ui/react-dom': path.resolve(
        __dirname,
        '../react-dom/src/index.ts'
      ),
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
