import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Casas-Contam-Historia",
  build: {
    sourcemap: false, // Enable sourcemap generation for production builds
  },
});
