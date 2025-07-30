// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
// const blog = defineCollection({
//   loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
// });
const enPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/en/" }),
});
const koPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ko/" }),
});
const jaPosts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/ja/" }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { enPosts, koPosts, jaPosts };
