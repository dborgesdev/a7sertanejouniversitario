import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    proxy: {
      "/api/now-playing": {
        target: "https://s04.svrdedicado.org:7228",
        changeOrigin: true,
        secure: true,
        rewrite: () => "/stats?json=1",
      },
    },
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: { outDir: "dist" },
});
