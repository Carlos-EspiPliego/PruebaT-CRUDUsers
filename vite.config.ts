import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@store': '/src/redux',
      '@router': '/src/router',
      '@hooks': '/src/hooks'
    }
  }
})
