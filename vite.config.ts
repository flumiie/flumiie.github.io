import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteRawPlugin from "vite-raw-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteRawPlugin({
      fileRegex: /\.glsl$/,
    }),
  ],
});
