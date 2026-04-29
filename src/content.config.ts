import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    images: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = { series };
