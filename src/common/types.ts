export type Languages = "en" | "ko" | "ja";
export type Pages = "" | "about" | "projects" | "contact" | "guestbook";
export type ProjectObjectType = {
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

export type ComponentsTitlesType = {
  skills: {
    en: string;
    ko: string;
    ja: string;
  };
  educationAndCareer: {
    en: string;
    ko: string;
    ja: string;
  };
  skillsFilter: {
    en: string;
    ko: string;
    ja: string;
  };
  contact: {
    en: string;
    ko: string;
    ja: string;
  };
  guestbook: {
    en: string;
    ko: string;
    ja: string;
  };
};
