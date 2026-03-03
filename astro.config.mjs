// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://digital-garden.vercel.app",
  output: "static",
  adapter: vercel(),
});
