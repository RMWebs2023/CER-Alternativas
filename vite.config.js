import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/CER-Alternativas/', // Cambia esto por el nombre de tu repositorio
  // base: "/",
});
