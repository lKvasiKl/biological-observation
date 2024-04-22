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
      constants: '/src/constants',
      modules: '/src/modules',
      pages: '/src/pages',
      utils: '/src/utils',
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
