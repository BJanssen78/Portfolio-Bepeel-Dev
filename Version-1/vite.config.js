import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    headers: {
      "Cache-Control": "no-cache",
    },
  },
  plugins: [react()],
});
