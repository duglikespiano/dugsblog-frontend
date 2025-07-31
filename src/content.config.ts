import { defineCollection } from "astro:content";
import { enPostSchema, koPostSchema, jaPostSchema } from "./common/types";
import { glob } from "astro/loaders";

const enPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/en/" }),
  schema: enPostSchema,
});
const koPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ko/" }),
  schema: koPostSchema,
});
const jaPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ja/" }),
  schema: jaPostSchema,
});

export const collections = { enPosts, koPosts, jaPosts };
