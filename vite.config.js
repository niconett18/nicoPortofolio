import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lottie: ['@lottiefiles/dotlottie-react'],
          animations: ['aos', 'framer-motion'],
          icons: ['lucide-react'],
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'aos', 'lucide-react', '@lottiefiles/dotlottie-react', 'framer-motion']
  },
  base: './'
})
