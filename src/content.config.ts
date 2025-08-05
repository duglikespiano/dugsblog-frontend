import { defineCollection } from "astro:content";
import { postSchema } from "./common/types";
import { glob } from "astro/loaders";

const enPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/en/" }),
  schema: postSchema,
});
const koPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ko/" }),
  schema: postSchema,
});
const jaPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ja/" }),
  schema: postSchema,
});

export const collections = { enPosts, koPosts, jaPosts };
