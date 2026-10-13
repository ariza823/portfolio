import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Publicado en GitHub Pages: https://ariza823.github.io/portfolio
export default defineConfig({
  site: 'https://ariza823.github.io',
  base: '/portfolio',
  vite: { plugins: [tailwindcss()] },
})
