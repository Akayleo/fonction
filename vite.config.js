import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fonction/', // This must match your GitHub repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});