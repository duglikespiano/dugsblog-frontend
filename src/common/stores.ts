import { atom } from "nanostores";
import type { Messages } from "./types";
import { allOfSkillsIhaveTried, allOfMyProjects } from "../common/variables";

export const skillsStore = atom(allOfSkillsIhaveTried);
export const projectsStore = atom(allOfMyProjects);
export const contactFormStore = atom({
  name: "",
  email: "",
  message: "",
});
export const guestbookFormStore = atom({
  name: "",
  password: "",
  message: "",
});
export const guestbookMessagesStore = atom<Messages[]>([]);
export const deleteMessageIdStore = atom(0);

export const navModalStore = atom(false);
export const fetchProcessingModalStore = atom(false);
export const mailDeliveredModalStore = atom(false);
export const fetchErrorModalStore = atom(false);
export const messageCreatedModalStore = atom(false);
export const askPasswordModalStore = atom(false);
export const deleteMessageCompleteModalStore = atom(false);
export const deleteMessageInvalidPasswordModalStore = atom(false);
