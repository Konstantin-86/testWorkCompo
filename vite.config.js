import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cssPreprocessOptions: {
    scss: {
      additionalData: `
              @import "./src/style/media.scss";
            `,
    },
  },
});
