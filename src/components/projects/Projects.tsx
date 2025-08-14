import { useStore } from "@nanostores/react";
import { skillsStore, projectsStore } from "../../common/stores";
import { projects } from "../../common/htmlElements";
import type { Languages } from "../../common/types";

type ProjectProps = {
  language: Languages;
};

export default function Projects({ language }: ProjectProps) {
  const filteredProjects = useStore(projectsStore);
  const selectedSkills = useStore(skillsStore);
  const selectedSkillsArray = selectedSkills.filter((skill) => skill.isSelected).map((skill) => skill.name);

  return (
    <section id="projects" className="pt-15 lg:px-20">
      <h2 className="text-green2 dark:text-rosewater text-2xl font-extrabold">{projects.title[language]}</h2>
      <ul className="dark:bg-green1 bg-rosewater relative z-10 mt-5 flex flex-col gap-5 lg:gap-10">
        {filteredProjects.map((project) => (
          <li className="border-green2 dark:border-gray3 rounded-4xl border-4 p-4 lg:p-8" key={project.id}>
            <p className="dark:text-gray1 text-green1 mb-1 text-xl font-bold">{project.title}</p>
            <div className="lg:px-6">
              <p className="mb-3 text-xl text-slate-950 opacity-80 lg:text-lg dark:text-gray-400">
                {project.descriptions[language]}
              </p>
              <div className="mb-3 flex flex-col text-slate-700 dark:text-gray-500">
                <div className="flex items-center text-base">
                  <span>{projects.deployment[language]}</span>
                  {project.deploymentURL ? (
                    <a
                      className="dark:border-gray3 border-green2 dark:bg-green2 text-gray3 rounded-sm border-1 bg-pink-800 p-0.5 text-xs"
                      href={project.deploymentURL}
                      target="_blank"
                    >
                      {projects.repository[language]}
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center text-base">
                  <span>{projects.frontend[language]}</span>
                  {project.frontendRepositoryURL ? (
                    <a
                      className="dark:border-gray3 border-green2 dark:bg-green2 text-gray3 rounded-sm border-1 bg-pink-800 p-0.5 text-xs"
                      href={project.frontendRepositoryURL}
                      target="_blank"
                    >
                      {projects.repository[language]}
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center text-base">
                  <span>{projects.backend[language]}</span>
                  {project.backendRepositoryURL ? (
                    <a
                      className="dark:border-gray3 border-green2 dark:bg-green2 text-gray3 rounded-sm border-1 bg-pink-800 p-0.5 text-xs"
                      href={project.backendRepositoryURL}
                      target="_blank"
                    >
                      {projects.repository[language]}
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
              <div>
                <p className="mb-1 text-base font-bold text-gray-800 dark:text-gray-300">{projects.skills[language]}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.skills.map((skill: string, index) => (
                    <li
                      className={`dark:border-gray3 border-green2 rounded-xl border-3 p-1 text-sm font-bold ${
                        selectedSkillsArray.includes(skill) ? "dark:bg-purple4 bg-green3" : "dark:bg-green2 bg-pink-800"
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
