import { configDefaults, defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "./build",
  },
});
