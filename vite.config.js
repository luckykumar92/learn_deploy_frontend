import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  preview: {
    host: "0.0.0.0",
    strictPort: true, // Exit if the port is already in use
    port: 4001,
    proxy: {
      "/api": {
        target: "https://print-saathi-backend-c3f95afc5a9f.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
  server: {
    // host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://print-saathi-backend-c3f95afc5a9f.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
