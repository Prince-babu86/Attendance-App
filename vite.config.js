import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Attendance',
        short_name: 'Attendance',
        description: 'My React Firebase Attendance App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'https://i.pinimg.com/736x/52/e0/bf/52e0bf9a513b9a3a13b498893b821a36.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://i.pinimg.com/736x/52/e0/bf/52e0bf9a513b9a3a13b498893b821a36.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    tailwindcss()
  ],
  server:{
    host:true
  }
})
