import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    site: 'https://studiomoare.com',
    i18n: {
        locales: ['es', 'ca'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [react(), icon()],
    vite: {
        plugins: [tailwindcss()],
    },
})
