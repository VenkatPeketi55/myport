import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // The React Three Fiber globe is lazily loaded into its own chunk.
    // Raising the warning threshold avoids a noisy warning for that isolated payload.
    chunkSizeWarningLimit: 1000,
  },
})
