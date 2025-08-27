// https://astro.build/config

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss("@tailwindcss/line-clamp")],
  },

  markdown: {
    shikiConfig: {
      theme: "andromeeda",
    },
  },

  integrations: [
    icon({
      include: {
        gg: ["spinner-two"],
        ph: ["github-logo-light", "instagram-logo-light"],
        humbleicons: ["check", "exclamation", "arrow-left", "mail"],
        cil: ["arrow-top", "sun", "moon", "trash"],
        "fa7-regular": ["face-surprise"],
        mdi: ["password-outline"],
      },
    }),
    react(),
    mdx(),
  ],

  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
  },
});
