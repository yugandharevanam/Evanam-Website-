import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
    strictPort: true,
    hmr: {
      overlay: false
    },
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/AppData/**',
        '**/Program Files/**',
        '**/Program Files (x86)/**',
        '**/Windows/**',
        '**/System32/**',
        '**/Temp/**',
        '**/tmp/**'
      ]
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
