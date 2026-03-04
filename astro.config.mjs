// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://digital-garden-two-eta.vercel.app",
  output: "hybrid",
  adapter: vercel(),
});
