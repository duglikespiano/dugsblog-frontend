import { atom } from 'nanostores';
import { allOfSkillsIhaveTried, allOfMyProjects } from '../common/variables';

// Initial value is all skills
export const skillsStore = atom(allOfSkillsIhaveTried);
export const projectsStore = atom(allOfMyProjects);
