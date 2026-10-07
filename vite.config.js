import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' makes the build work on GitHub Pages, Vercel and Netlify.
export default defineConfig({ base: './', plugins: [react()] })
