import { defineCollection } from "astro:content";
import { postSchema } from "./common/types";
import { glob } from "astro/loaders";

const enPosts = defineCollection({
  loader: glob({ pattern: "**/en.mdx", base: "./src/content/" }),
  schema: postSchema,
});
const koPosts = defineCollection({
  loader: glob({ pattern: "**/ko.mdx", base: "./src/content/" }),
  schema: postSchema,
});
const jaPosts = defineCollection({
  loader: glob({ pattern: "**/ja.mdx", base: "./src/content/" }),
  schema: postSchema,
});

export const collections = { enPosts, koPosts, jaPosts };
