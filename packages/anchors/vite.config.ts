import {defineConfig} from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    root: './test',
    globals: true,
  },
});
