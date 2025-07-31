import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const enPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/en/" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tags: z.string().array(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const koPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ko/" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tags: z.string().array(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const jaPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ja/" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tags: z.string().array(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { enPosts, koPosts, jaPosts };
