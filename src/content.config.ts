import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false)
    })
});

export const collections = { blog };