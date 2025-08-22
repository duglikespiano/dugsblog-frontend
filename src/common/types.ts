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

export const tagKeys = ["travel", "thoughts", "programming"] as const;
// export const tagKeys = ["programming", "javascript", "css", "html", "php", "framework"] as const;
export type TagLang = (typeof tagKeys)[number];

export const tags: Record<TagLang, TagTranslations> = {
  programming: { en: "Programming", ko: "프로그래밍", ja: "プログラミング" },
  // javascript: { en: "Javascript", ko: "자바스크립트", ja: "ジャバスクリプト" },
  // css: { en: "CSS", ko: "CSS", ja: "CSS" },
  // html: { en: "HTML", ko: "HTML", ja: "HTML" },
  // php: { en: "PHP", ko: "PHP", ja: "PHP" },
  // framework: { en: "Framework", ko: "프레임워크", ja: "フレームワーク" },
  travel: { en: "Travel", ko: "여행", ja: "旅行" },
  thoughts: { en: "Thoughts", ko: "생각", ja: "考え" },
} as const;

export type TagTranslations = {
  [key in Languages]: string;
};

export type TagKey = keyof typeof tags;
export type TagType = { en: string; ko: string; ja: string };

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.string().array(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

export type Messages = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};
