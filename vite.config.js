import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  resolve: {
    alias: {
      'slick-carousel/slick': '/node_modules/slick-carousel/slick' // Alias for direct import
    }
  }
});
