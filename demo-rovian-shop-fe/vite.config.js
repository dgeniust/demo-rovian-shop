import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ["@swc/plugin-styled-components", {}]],
  ssr: {
    noExternal: ["styled-components", "@emotion/*"],
  },
});
