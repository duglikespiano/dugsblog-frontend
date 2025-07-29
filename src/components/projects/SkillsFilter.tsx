import { useStore } from "@nanostores/react";
import { skillsStore, projectsStore } from "../../common/stores";
import { skillsFilter } from "../../common/htmlElements";
import { allOfSkillsIhaveTried, allOfMyProjects } from "../../common/variables";
import type { ProjectObjectType } from "../../common/types";
import type { Languages } from "../../common/types";

type ProjectProps = {
  language: Languages;
};

export default function SkillsFilter({ language }: ProjectProps) {
  const selectedSkills = useStore(skillsStore);

  const toggleSkillsSelect = (index: number) => {
    selectedSkills[index].isSelected = !selectedSkills[index].isSelected;
    skillsStore.set([...selectedSkills]);
  };

  const handleDisplayProjects = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
    toggleSkillsSelect(index);

    const selectedSkillsArray = selectedSkills.filter((skill) => skill.isSelected).map((skill) => skill.name);
    const filteredProjects: ProjectObjectType[] = [];

    selectedSkillsArray.forEach((selectedSkill) => {
      allOfMyProjects.forEach((project) => {
        project.skills.forEach((skill) => {
          if (selectedSkill === skill) {
            filteredProjects.push(project);
          }
        });
      });
    });

    if (allOfSkillsIhaveTried.length === selectedSkills.filter((skill) => !skill.isSelected).length) {
      projectsStore.set(allOfMyProjects);
    } else {
      const sortedProjects = filteredProjects.sort(
        (a, b) => new Date(b.period[0]).getTime() - new Date(a.period[0]).getTime(),
      );
      projectsStore.set(Array.from(new Set(sortedProjects)) as ProjectObjectType[]);
    }
  };

  return (
    <section
      id="skillsFilter"
      className="after:bg-green2 dark:after:bg-gray3 relative pb-15 after:absolute after:bottom-0 after:left-[50%] after:block after:h-0.5 after:w-full after:translate-x-[-50%] after:content-[''] lg:px-20 lg:after:w-[calc(100%-10rem)]"
    >
      <h2 className="text-green2 dark:text-rosewater text-2xl font-extrabold">{skillsFilter.title[language]}</h2>
      <div className="lg:px-6">
        <p className="text-green1 text-xl font-bold dark:text-gray-400">{skillsFilter.heading[language]}</p>
        <p className="flex items-center text-lg font-bold text-gray-600 dark:text-gray-500">
          <span className="dark:text-yellow1 text-orange-600">{allOfMyProjects.length}</span>
          {skillsFilter.counts[language][0]}
          <span className="dark:text-yellow1 text-orange-600">{projectsStore.get().length}</span>
          {skillsFilter.counts[language][1]}
        </p>
      </div>
      <ul className="border-green2 dark:border-gray3 mt-5 flex flex-wrap gap-1.5 rounded-4xl border-4 p-5 lg:gap-2.5">
        {selectedSkills.map((skill, index: number) => (
          <li
            className={`border-green2 dark:border-gray3 text-md flex cursor-pointer items-center justify-center rounded-2xl border-4 p-1 font-bold select-none ${
              skill.isSelected ? "dark:bg-purple4 bg-green3" : "dark:bg-green2 bg-pink-800"
            }`}
            onClick={(event) => handleDisplayProjects(event, index)}
            key={skill.id}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
