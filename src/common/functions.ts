import { fileURLToPath } from "node:url";
import path from "node:path";

export function printFileURL(url: string) {
  const __filename = fileURLToPath(url);
  const fullFilePath = path.dirname(__filename);
  const folderName = fullFilePath.split("[language]/")[1];
  return folderName;
}

export function printPageTitle(language: string, page: string): string {
  return "";
}
