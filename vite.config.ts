import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa';
import oxlintPlugin from 'vite-plugin-oxlint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    oxlintPlugin(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    vercel(),
    // eslint(), # disable eslint for now. Getting errors with vite-plugin-eslint
    million.vite({ auto: true }),
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
        display: 'standalone',
        background_color: 'peachpuff',
        theme_color: 'rgb(255 218 185)',
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
      },
    }),
  ],
});
