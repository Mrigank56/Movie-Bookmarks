import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensures compatibility with Vercel's Linux build system
    target: "esnext",
  },
});
