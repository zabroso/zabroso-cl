import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ecommerce: resolve(__dirname, 'ecommerce/index.html'),
        sobre: resolve(__dirname, 'sobre/index.html'),
        contacto: resolve(__dirname, 'contacto/index.html'),
        privacidad: resolve(__dirname, 'privacidad/index.html'),
        terminos: resolve(__dirname, 'terminos/index.html'),
      },
    },
  },
})
