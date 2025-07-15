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
export const guestbookFormStore = atom({
  name: "",
  password: "",
  message: "",
});
export const guestbookMessagesStore = atom([
  {
    name: "ㅋㅋㅋㅋㅋㅋ",
    date: "1234",
    message: "12314123123",
  },
  {
    name: "ad",
    date: "1234",
    message: "13gsdasqdffzxvxv",
  },
  {
    name: "sdfgsdg",
    date: "1234",
    message: "jk;yuiy",
  },
  {
    name: "56474567457",
    date: "1234",
    message: "asghdashsdfghsdghdsghsdgh",
  },
]);
