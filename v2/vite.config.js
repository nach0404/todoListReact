import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/todoListReact/v2/',
  plugins: [react()],
})