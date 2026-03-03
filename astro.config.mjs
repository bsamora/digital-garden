// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://digital-garden-c99k0jiis-brandonsamora-1009s-projects.vercel.app",
  output: "static",
  adapter: vercel(),
});
