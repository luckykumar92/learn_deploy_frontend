import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    // host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://neartocollege-backend-5984b8127320.herokuapp.com",
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
