import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        image: z
            .object({
                src: z.nullable(z.string()),
                alt: z.nullable(z.string()),
            })
            .optional(),
        tags: z.array(z.string()),
        sortOrder: z.number(),
        type: z.string(),
        client: z.string(),
        url: z.string().optional(),
        year: z.string().optional(),
    }),
})

const staticData = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/static-data' }),
    schema: z.object({
        slug: z.string(),
        fragment_1: z.string().optional(),
        fragment_2: z.string().optional(),
        fragment_3: z.string().optional(),
        fragment_4: z.string().optional(),
        fragment_5: z.string().optional(),
        fragment_6: z.string().optional(),
        fragment_7: z.string().optional(),
        fragment_8: z.string().optional(),
        fragment_9: z.string().optional(),
        fragment_10: z.string().optional(),
        fragment_11: z.string().optional(),
        fragment_12: z.string().optional(),
        fragment_13: z.string().optional(),
        fragment_14: z.string().optional(),
        fragment_15: z.string().optional(),
        list_1: z.array(z.string()).optional(),
    }),
})

export const collections = {
    projects,
    'static-data': staticData,
}
