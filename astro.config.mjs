// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import { languages, defaultLang } from './src/i18n/ui'

// https://astro.build/config
export default defineConfig({
    site: 'https://studiomoare.com',
    i18n: {
        locales: Object.keys(languages),
        defaultLocale: defaultLang,
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [react(), icon(), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
})
