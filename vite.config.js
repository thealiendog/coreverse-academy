import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    // Only run React component tests (.jsx/.tsx).
    // Pure-JS utility tests (.test.js) are run separately via `node --test`.
    include: ['src/**/*.test.{jsx,tsx}'],
  },
})
