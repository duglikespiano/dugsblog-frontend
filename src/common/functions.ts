import { fileURLToPath } from "node:url";
import path from "node:path";

export function printFileURL(url: string) {
  const __filename = fileURLToPath(url);
  return path.dirname(__filename);
}

export function printPageTitle(language: string, page: string): string {
  return "";
}
