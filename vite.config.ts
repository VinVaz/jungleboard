import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      enableRouteGeneration: false,
    }),
    react(),
    tailwindcss(),
  ],
  server: { port: 5173 },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
