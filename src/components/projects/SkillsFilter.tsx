import { useStore } from "@nanostores/react";
import { skillsStore, projectsStore } from "../../common/stores";
import { allOfSkillsIhaveTried, allOfMyProjects } from "../../common/variables";
import type { ProjectObjectType } from "../../common/variables";

export default function SkillsFilter() {
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
      <h3 className="text-rosewater mb-5 text-5xl font-bold">Skills filter</h3>
      <div className="px-6">
        <p className="text-2xl font-bold text-gray-400">
          Click skills to filter projects
        </p>
        <p className="flex items-center text-xl font-bold text-gray-500">
          <span className="text-yellow1">{projectsStore.get().length}</span>
          &nbsp;of&nbsp;
          <span className="text-yellow1">{allOfMyProjects.length}</span>
          &nbsp;Project(s) selected
        </p>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2.5 rounded-4xl border-4 p-5">
        {selectedSkills.map((skill, index: number) => (
          <li
            className={`flex cursor-pointer items-center justify-center rounded-2xl border-4 p-1 text-2xl font-bold select-none ${
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
