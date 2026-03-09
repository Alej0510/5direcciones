// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],
  image: {
    service: sharpImageService(),
  },
});