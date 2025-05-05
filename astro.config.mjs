// https://astro.build/config

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        ph: ["github-logo-light", "instagram-logo-light"],
      },
    }),
    react(),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
