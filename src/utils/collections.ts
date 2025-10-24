import type { CollectionEntry } from 'astro:content'

export function filterByLocale(
    entries: CollectionEntry<'projects'>[],
    locale: string
) {
    return entries
        .filter((entry) => entry.slug.endsWith(`/${locale}`))
        .map((entry) => ({
            ...entry,
            slug: entry.slug.replace(`/${locale}`, ''),
        }))
}
