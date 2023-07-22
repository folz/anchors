import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  server: {
    port: 1234,
  },
  root: './test',
  plugins: [react()],
  resolve: {
    alias: {
      '@folz/anchors': path.resolve(__dirname, '../anchors/src/index.ts'),
      '@folz/anchors-react': path.resolve(
        __dirname,
        '../anchors-react/src/index.ts'
      ),
    },
  },
});
