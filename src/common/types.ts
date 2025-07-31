import { z } from "astro:schema";
import type { CollectionEntry } from "astro:content";
export type Post = CollectionEntry<"enPosts">;
export type Posts = Post[];

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

export const tags = {
  programming: { en: "Programming", ko: "프로그래밍", ja: "プログラミング" },
  javascript: { en: "Javascript", ko: "자바스크립트", ja: "ジャバスクリプト" },
  css: { en: "CSS", ko: "CSS", ja: "CSS" },
  html: { en: "HTML", ko: "HTML", ja: "HTML" },
  php: { en: "PHP", ko: "PHP", ja: "PHP" },
  framework: { en: "Framework", ko: "프레임워크", ja: "フレームワーク" },
  travel: { en: "Travel", ko: "여행", ja: "旅行" },
  thoughts: { en: "Thoughts", ko: "생각", ja: "考え" },
} as const;

export type TagLang = keyof (typeof tags)[keyof typeof tags];
export type TagKey = keyof typeof tags;

function extractTagTuple<T extends TagLang>(lang: T) {
  const values = Object.values(tags) as ReadonlyArray<Record<TagLang, string>>;
  const result = values.map((tag) => tag[lang]) as unknown as readonly [string, ...string[]];
  return result;
}

export const enTags = extractTagTuple("en");
export const koTags = extractTagTuple("ko");
export const jaTags = extractTagTuple("ja");

export type EnTags = (typeof enTags)[number];
export type KoTags = (typeof koTags)[number];
export type JaTags = (typeof jaTags)[number];

export const enPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tags: z.string().array(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});
export const koPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tags: z.string().array(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});
export const jaPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tags: z.string().array(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});
