import { useStore } from "@nanostores/react";
import { skillsStore, projectsStore } from "../../common/stores";
import type { Languages } from "../../common/types";

type ProjectProps = {
  language: Languages;
};

export default function Projects({ language }: ProjectProps) {
  const filteredProjects = useStore(projectsStore);
  const selectedSkills = useStore(skillsStore);
  const selectedSkillsArray = selectedSkills
    .filter((skill) => skill.isSelected)
    .map((skill) => skill.name);

  return (
    <section id="projects" className="px-5 pt-15 lg:px-20">
      <h3 className="text-rosewater text-5xl font-bold">Projects</h3>
      <ul className="mt-5 flex flex-col gap-5 lg:gap-10">
        {filteredProjects.map((project) => (
          <li className="rounded-4xl border-4 p-4 lg:p-8" key={project.id}>
            <p className="text-gray1 mb-3 text-2xl font-bold md:text-4xl">
              {project.title}
            </p>
            <div className="lg:px-6">
              <p className="mb-3 text-xl text-gray-400 lg:text-3xl">
                {project.descriptions[language]}
              </p>
              <div className="mb-3 flex flex-col text-gray-500">
                <div className="flex items-center text-base lg:text-lg">
                  <span>Deployment URL :&nbsp;</span>
                  {project.deploymentURL ? (
                    <a
                      className="bg-green2 rounded-sm border-1 p-0.5 text-xs text-gray-300"
                      href={project.deploymentURL}
                    >
                      Click here
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center text-base lg:text-lg">
                  <span>Frontend Repository :&nbsp;</span>
                  {project.frontendRepositoryURL ? (
                    <a
                      className="bg-green2 rounded-sm border-1 p-0.5 text-xs text-gray-300"
                      href={project.frontendRepositoryURL}
                    >
                      Click here
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center text-base lg:text-lg">
                  <span>Backend Repository :&nbsp;</span>
                  {project.backendRepositoryURL ? (
                    <a
                      className="bg-green2 rounded-sm border-1 p-0.5 text-xs text-gray-300"
                      href={project.backendRepositoryURL}
                    >
                      Click here
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
              <div>
                <p className="mb-1 text-xl font-bold text-gray-300 lg:text-2xl">
                  Related Skills
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.skills.map((skill: string, index) => (
                    <li
                      className={`rounded-xl border-3 p-1 text-sm font-bold lg:text-xl ${
                        selectedSkillsArray.includes(skill)
                          ? "bg-purple4"
                          : "bg-green2"
                      }`}
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
