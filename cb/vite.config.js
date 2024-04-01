import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
    path: {},
    os: {},
  },
  optimizeDeps: {
    include: ['twin.macro'],
    exclude: ['babel-plugin-macros']
  },
  build: {
    sourcemap: false,
  },
});
