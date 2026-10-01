import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // YYYY-MM the project started; sorts the grid newest first.
      start: z.string().regex(/^\d{4}-\d{2}$/),
      period: z.string(),
      image: image(),
      video: z.string(), // YouTube id
      link: z.url().optional(),
      linkName: z.string().optional(),
    }),
});

export const collections = { projects };
