import { useStore } from "@nanostores/react";
import { skillsStore, projectsStore } from "../../common/stores";
import { skillsFilter } from "../../common/htmlElements";
import { allOfSkillsIhaveTried, allOfMyProjects } from "../../common/variables";
import type { ProjectObjectType } from "../../common/variables";
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

  const handleDisplayProjects = (
    event: React.MouseEvent<HTMLLIElement>,
    index: number,
  ) => {
    toggleSkillsSelect(index);

    const selectedSkillsArray = selectedSkills
      .filter((skill) => skill.isSelected)
      .map((skill) => skill.name);
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

    if (
      allOfSkillsIhaveTried.length ===
      selectedSkills.filter((skill) => !skill.isSelected).length
    ) {
      projectsStore.set(allOfMyProjects);
    } else {
      const sortedProjects = filteredProjects.sort(
        (a, b) =>
          new Date(b.period[0]).getTime() - new Date(a.period[0]).getTime(),
      );
      projectsStore.set(
        Array.from(new Set(sortedProjects)) as ProjectObjectType[],
      );
    }
  };

  return (
    <section
      id="skillsFilter"
      className="after:bg-gray3 relative px-5 pb-15 after:absolute after:bottom-0 after:left-[50%] after:block after:h-0.5 after:w-[calc(100%-(var(--spacing)*5)*2)] after:translate-x-[-50%] after:content-[''] lg:px-20 lg:after:w-[calc(100%-10rem)]"
    >
      <h3 className="text-rosewater mb-5 text-5xl font-bold">
        {skillsFilter.title[language]}
      </h3>
      <div className="lg:px-6">
        <p className="text-2xl font-bold text-gray-400">
          {skillsFilter.heading[language]}
        </p>
        {language === "en" ? (
          <p className="flex items-center text-xl font-bold text-gray-500">
            <span className="text-yellow1">{projectsStore.get().length}</span>
            {skillsFilter.counts[language][0]}
            <span className="text-yellow1">{allOfMyProjects.length}</span>
            {skillsFilter.counts[language][1]}
          </p>
        ) : (
          <p className="flex items-center text-xl font-bold text-gray-500">
            <span className="text-yellow1">{allOfMyProjects.length}</span>
            {skillsFilter.counts[language][0]}
            <span className="text-yellow1">{projectsStore.get().length}</span>
            {skillsFilter.counts[language][1]}
          </p>
        )}
      </div>
      <ul className="mt-5 flex flex-wrap gap-1.5 rounded-4xl border-4 p-5 lg:gap-2.5">
        {selectedSkills.map((skill, index: number) => (
          <li
            className={`flex cursor-pointer items-center justify-center rounded-2xl border-4 p-1 text-xl font-bold select-none lg:text-2xl ${
              skill.isSelected ? "bg-purple4" : "bg-green2"
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
