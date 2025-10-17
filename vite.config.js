import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base usado por Vite cuando el sitio se sirve desde GitHub Pages
  // Cambia '/Todo-List-React/' si tu repositorio tiene otro nombre
  base: '/Todo-List-React/',
  plugins: [react()],
})
