import { pageTitles } from "./htmlElements";
import { tags } from "./types";
import type { Languages, TagLang } from "./types";

export function printFilename(url: string, withExtension: boolean = false) {
  const fileNameWithExtension = url.split("/")[url.split("/").length - 1];
  const fileNameWithoutExtension = fileNameWithExtension.split(".")[0];
  if (withExtension) {
    return fileNameWithExtension;
  } else {
    return fileNameWithoutExtension;
  }
}

export function printHTMLDocumentLanguage(language: string) {
  if (language === "en") {
    return "en-US";
  } else if (language === "ko") {
    return "ko-KR";
  } else if (language === "ja") {
    return "ja-JP";
  }
}

export function printPageUrlInMenuButton(url: string) {
  const filteredLanguagesArray: { title: string; pageUrl?: string }[] = [];
  const languageFromUrl = url.split("/")[1];
  const dataObject: Record<Languages, { title: string; pageUrl?: string }> = {
    ko: { title: "한글" },
    en: { title: "Eng" },
    ja: { title: "日本語" },
  };

  (Object.keys(dataObject) as Languages[]).forEach((key) => {
    const originalPath = url.split("/");
    originalPath[1] = key;
    dataObject[key]["pageUrl"] = originalPath.join("/");

    if (key !== languageFromUrl) {
      filteredLanguagesArray.push(dataObject[key]);
    }
  });

  return filteredLanguagesArray;
}

export function printPageTitle(url: string, language: Languages): string {
  const isPageTop = !Boolean(url.split("/")[2]);
  const whichPage = url.split("/")[2];
  if (isPageTop) {
    return `${pageTitles["main"][language]}`;
  }

  if (whichPage in pageTitles) {
    return `${pageTitles["main"][language]} - ${pageTitles[whichPage as keyof typeof pageTitles][language]}`;
  }

  return pageTitles.main[language];
}

export function capitalizeFirstLetter(str: string) {
  if (str.length === 0) {
    return "";
  }
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function isStringLanguage(value: string): boolean {
  return ["en", "ko", "ja"].includes(value);
}

export function getTagKeyByTranslation(searchValue: string, lang: Languages): TagLang | undefined {
  return (Object.keys(tags) as TagLang[]).find((key) => tags[key][lang] === searchValue);
}
