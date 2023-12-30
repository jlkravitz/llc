import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://magicclay.io",
  integrations: [tailwind(), sentry(), spotlightjs(), react()]
});