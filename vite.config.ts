import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/<repo>/
const GH_PAGES_BASE = '/AS-FilipinoRestaurant.io/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Local dev uses "/" so http://localhost:5173/ works; production build uses repo base path.
  base: command === 'build' ? GH_PAGES_BASE : '/',
  plugins: [react(), tailwindcss()],
}))
