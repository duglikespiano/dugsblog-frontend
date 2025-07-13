import { atom } from "nanostores";
import { allOfSkillsIhaveTried, allOfMyProjects } from "../common/variables";

export const skillsStore = atom(allOfSkillsIhaveTried);
export const projectsStore = atom(allOfMyProjects);
export const isModalOpenStore = atom({
  nav: false,
  "contact-process": false,
  "contact-complete": false,
});
export const contactFormStore = atom({
  name: "",
  email: "",
  message: "",
});
