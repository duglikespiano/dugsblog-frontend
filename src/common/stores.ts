import { atom } from 'nanostores';
import { allOfSkillsIhaveTried, allOfMyProjects } from '../common/variables';

export const skillsStore = atom(allOfSkillsIhaveTried);
export const projectsStore = atom(allOfMyProjects);
