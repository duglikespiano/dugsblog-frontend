import { z } from "astro:schema";

export type Languages = "en" | "ko" | "ja";
export type Pages = "" | "about" | "projects" | "contact" | "guestbook";
export type Project = {
  id: number;
  title: string;
  descriptions: {
    en: string;
    ko: string;
    ja: string;
  };
  deploymentURL: string;
  frontendRepositoryURL: string;
  backendRepositoryURL: string;
  period: string[];
  skills: string[];
};
export const collectionMap = {
  en: "enPosts",
  ko: "koPosts",
  ja: "jaPosts",
} as const;
export const tags = [
  "programming",
  "javascript",
  "css",
  "html",
  "php",
  "framework",
  "travel",
  "career",
  "thoughts",
] as const;
export type Tags = (typeof tags)[number];
export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tags: z.array(z.enum(tags)),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});
