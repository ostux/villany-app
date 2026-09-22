import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    // Disable performance hints to avoid web vitals errors
    reportCompressedSize: false,
  },
  server: {
    hmr: {
      // More stable HMR configuration
      overlay: true,
    },
  },
});
