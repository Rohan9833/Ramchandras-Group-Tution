import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes the server accessible externally
    port: 5173, // Optional: Change this if you prefer a different port
    // base: "/",
  },
});
