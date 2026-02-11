import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ IMPORTANT: Remplace 'nom-de-ton-repo' par le nom exact de ton repository GitHub
  // Par exemple, si ton repo s'appelle 'portfolio', mets: base: '/portfolio/'
  // Si tu utilises username.github.io comme nom de repo, mets: base: '/'
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
