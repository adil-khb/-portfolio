import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../node_modules/.vite-portfolio',
  resolve: { dedupe: ['react', 'react-dom'] },
});
