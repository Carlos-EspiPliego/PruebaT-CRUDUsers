import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@store': '/src/redux',
      '@components': '/src/components',
      '@router': '/src/router',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@layouts': '/src/ui/layouts',
      '@ui': '/src/ui',
      '@images': '/src/assets/images',
      '@api': '/src/api',
      '@utils': '/src/utils'
    }
  }
})
