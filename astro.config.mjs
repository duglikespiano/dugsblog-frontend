// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		icon({
			include: {
				ph: ['github-logo-light', 'instagram-logo-light'],
			},
		}),
		react(),
	],
	output: 'static',
	adapter: node({
		mode: 'standalone',
	}),
});
