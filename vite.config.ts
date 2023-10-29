import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

const showHostConfig = {
  host: '0.0.0.0',
  strictPort: true,
  open: false,
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [svgr(), react()],
  server: {
    watch: {
      usePolling: true,
    },
    ...showHostConfig,
    port: 3000,
    hmr: {
      path: 'ws',
      clientPort: Number(process.env.WDS_SOCKET_PORT),
    },
  },
  preview: {
    ...showHostConfig,
    port: 3001,
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve('src', 'styles')],
      },
    },
  },
  resolve: {
    alias: {
      '@/Domain': path.resolve('src', 'components', 'Domain'),
      '@/UI': path.resolve('src', 'components', 'UI'),
      '@/Common': path.resolve('src', 'components', 'Common'),
      '@/assets': path.resolve('src', 'assets'),
      '@': path.resolve('src'),
    },
  },
})
