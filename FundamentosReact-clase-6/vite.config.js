import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['279ded17-b0fb-43ee-869f-4ac5ed3af799-00-xvasps1tsrri.worf.replit.dev']
  }
})
