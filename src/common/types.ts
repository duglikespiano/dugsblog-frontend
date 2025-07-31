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
export type Tags = "programming";
