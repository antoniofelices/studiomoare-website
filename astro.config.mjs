import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://studiomoare.com',
  i18n: {
    locales: ['es', 'ca'],
    defaultLocale: 'es',
    routing: {
        prefixDefaultLocale: false
    }
  },
  integrations: [
    react(),
    icon(),
    tailwind({
      nesting: true,
    })
  ]
});