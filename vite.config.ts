import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import vercel from 'vite-plugin-vercel';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa';
import { internalIpV4 } from 'internal-ip';

const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vercel(),
    TanStackRouterVite(),
    // eslint(), # disable eslint for now. Getting errors with vite-plugin-eslint
    // million.vite({ auto: true }), # disable million for now. Getting keys not found warning.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'mask-icon.svg',
        'src/assets/dragonballZ.mp3',
        'assets/dragonballZ-CBedy-bg.mp3',
        'assets/dragonballZ.mp3',
      ],
      manifest: {
        name: 'Anki App',
        short_name: 'anki-app',
        description: 'improve your norsk vocabularies',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: '/mobile-screenshot-1.png',
            sizes: '640x1136',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: '/desktop-screenshot-1.png',
            sizes: '1136x640',
            type: 'image/png',
            form_factor: 'wide',
          },
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#00FFFF',
        theme_color: '#00FFFF',
      },
    }),
  ],
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: mobile ? '0.0.0.0' : false,
    hmr: mobile
      ? {
          protocol: 'ws',
          host: await internalIpV4(),
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },
});
