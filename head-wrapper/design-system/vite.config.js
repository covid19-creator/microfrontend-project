import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'DesignSystem',
      fileName: 'design-system',
    },
  },
});