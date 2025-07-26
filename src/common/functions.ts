import { fileURLToPath } from "node:url";
import type { Languages } from "./types";
import path from "node:path";

export function printFileURL(url: string) {
  const __filename = fileURLToPath(url);
  const fullFilePath = path.dirname(__filename);
  const folderName = fullFilePath.split("[language]/")[1];
  return folderName;
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

export function printPageUrl(url: string) {
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
