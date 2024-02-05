import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vercel(),
    TanStackRouterVite(),
    million.vite({ auto: true }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
