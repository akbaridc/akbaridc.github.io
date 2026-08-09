import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
const config: UserConfigExport = ({ mode }) => ({
  // Path base relatif, penting untuk hosting statis (Netlify, GitHub Pages, dsb.)
  base: "./",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // Hanya jalankan componentTagger di mode development
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist", // folder hasil build
    assetsDir: "assets", // folder untuk css/js/img
    sourcemap: false, // bisa diubah ke true kalau mau debug
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },

  // Optimasi module cache untuk production
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});

export default defineConfig(config);
