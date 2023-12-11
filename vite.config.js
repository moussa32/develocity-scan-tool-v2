import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@components": path.resolve(__dirname, "./src/shared/components/"),
      "@layout": path.resolve(__dirname, "./src/shared/layout/"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks/"),
      "@util": path.resolve(__dirname, "./src/shared/util/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@images": path.resolve(__dirname, "./src/assets/images/"),
    },
  },
});
