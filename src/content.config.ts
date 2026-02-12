import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().default('Lenin AGC'),
    date: z.coerce.date(),
    cover: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    prev: z.union([z.object({ text: z.string(), link: z.string() }), z.boolean()]).optional(),
    next: z.union([z.object({ text: z.string(), link: z.string() }), z.boolean()]).optional(),
  }),
});

export const collections = { blog };
