# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
```

No test or lint scripts are configured.

## Architecture Overview

This is an **Astro 7** static site for Studio Moare with React islands, MDX content, Tailwind CSS v4, and a custom i18n system.

### i18n System

Two locales: Spanish (`es`, default) and Catalan (`ca`). The default locale has **no URL prefix** — Spanish pages are at `/`, `/proyectos`, etc.; Catalan pages are at `/ca/`, `/ca/projectes/`, etc.

Three files power the entire i18n system:
- `src/i18n/ui.ts` — locale definitions, hreflang values, and translated route slugs
- `src/i18n/strings-to-translate.ts` — all UI strings as a typed bilingual object; `TranslationKeyType` is auto-derived from its keys
- `src/i18n/utils.ts` — `getLangFromUrl()`, `useTranslations()`, `useTranslatedPath()`, `getRouteFromUrl()`

Missing translation keys fall back to the default language automatically.

### Content Collections

Defined in `src/content.config.js`:

1. **`projects`** (content) — Each project has a directory under `src/content/projects/{name}/` containing separate `es.mdx` and `ca.mdx` files. The slug pattern is `project-name/language-code`. Use `src/utils/collections.ts` → `filterByLocale()` to filter and strip language suffixes when rendering lists.

2. **`static-data`** (data) — JSON files named `page-{name}-{lang}.json` holding page content as `fragment_1`…`fragment_15` fields. Pages load their content with `getEntry('static-data', 'page-name-lang')` and render fragments directly — no hardcoded copy in templates.

### Page Structure

- **Static pages**: One `.astro` file per locale (e.g., `src/pages/index.astro` + `src/pages/ca/index.astro`). Load fragments from `static-data` collection.
- **Dynamic project pages**: `src/pages/[slug].astro` + `src/pages/ca/[slug].astro` — use `getStaticPaths()` to pre-generate all routes at build time.

### React Islands

Interactive UI is isolated to React components loaded with `client:only="react"`:
- `ProjectList.jsx` — tag filtering via `useProjectFiltering` hook, sorts by `sortOrder` descending
- `ButtonToggleDarkMode.jsx` — persists preference to `localStorage`

### Styling

Tailwind CSS v4 — **no `tailwind.config` file**. All theme customization (brand colors `m-blue`, `m-orange`, `m-beige`, etc.; custom type scale; custom spacing) is defined inline in `src/styles/global.css` using `@theme`. Dark mode is toggled via a `.dark` class on the root element.

### Path Aliases

Configured in `tsconfig.json`: `@assets/*`, `@components/*`, `@hooks/*`, `@i18n/*`, `@layouts/*`, `@styles/*`, `@utils/*`.

### Environment Variables

- `VITE_GETFORM_KEY` — required for the contact form (`src/components/Form.astro`), which submits to GetForm.io

### Key Non-Obvious Patterns

- **Adding a new translatable string**: add it to `src/i18n/strings-to-translate.ts` in both locales; the type is derived automatically.
- **Adding a new page route**: add the slug mapping to `src/i18n/ui.ts` → `routes`, then create paired `.astro` files in `src/pages/` and `src/pages/ca/`.
- **Adding a new project**: create `src/content/projects/{name}/es.mdx` and `ca.mdx` with the schema fields (`title`, `tags`, `sortOrder`, `type`, `client`, optionally `image`, `url`, `year`).
