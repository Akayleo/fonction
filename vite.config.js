import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/fonction/', // This must match your GitHub repo name
  plugins: [react()], // Added React plugin
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
