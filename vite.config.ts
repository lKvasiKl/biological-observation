import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      data: '/src/data',
      styles: '/src/styles',
      utils: '/src/utils',
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
