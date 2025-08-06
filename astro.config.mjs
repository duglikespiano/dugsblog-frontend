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

  integrations: [
    icon({
      include: {
        ph: ["github-logo-light", "instagram-logo-light"],
        zondicons: ["hour-glass"],
        humbleicons: ["check", "exclamation", "arrow-left"],
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
});
