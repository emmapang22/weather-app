import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/emmapang22.github.io/weather-app/",
  plugins: [tailwindcss()],
});
