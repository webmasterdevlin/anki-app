import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import million from 'million/compiler';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), vercel(), TanStackRouterVite()],
});
