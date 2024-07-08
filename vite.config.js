import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    strictPort: true, // Exit if the port is already in use
    port: 4001,
    proxy: {
      "/api": {
        target: "https://print-saathi-backend-c3f95afc5a9f.herokuapp.com", // Your API server
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on("proxyRes", (proxyRes, req, res) => {
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
              "Access-Control-Allow-Methods",
              "GET,OPTIONS,PATCH,DELETE,POST,PUT"
            );
            res.setHeader(
              "Access-Control-Allow-Headers",
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
            );
          });
        },
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
