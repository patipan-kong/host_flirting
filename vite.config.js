import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173, // Fallback for local development,
    allowedHosts: [
      'host-flirting.onrender.com',
      'ai-host-ek4c.onrender.com'
    ]
  }
})
