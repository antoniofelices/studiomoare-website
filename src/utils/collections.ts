import type { CollectionEntry } from 'astro:content'

export function filterByLocale(
    entries: CollectionEntry<'projects'>[],
    locale: string
) {
    return entries
        .filter((entry) => entry.id.endsWith(`/${locale}`))
        .map((entry) => ({
            ...entry,
            id: entry.id.replace(`/${locale}`, ''),
        }))
}
