import { useStore } from '@nanostores/react';
import { skillsStore, projectsStore } from '../../common/stores';

export default function Projects() {
	const filteredProjects = useStore(projectsStore);
	const selectedSkills = useStore(skillsStore);
	const selectedSkillsArray = selectedSkills.filter((skill) => skill.isSelected).map((skill) => skill.name);

	return (
		<section id="projects">
			<ul className="pt-15 flex flex-col gap-10 px-20">
				{filteredProjects.map((project) => (
					<li className="border-4 rounded-4xl p-8" key={project.id}>
						<div className="flex flex-col mb-3">
							<p className="text-5xl font-bold mb-0.5 text-gray1">{project.title}</p>
							<p className="text-3xl text-gray-400">{project.descriptionEn}</p>
						</div>
						<div className="flex flex-col mb-3 text-gray-500">
							<div className="flex text-lg items-center">
								<span>Deployment URL :&nbsp;</span>
								{project.deploymentURL ? (
									<a className="border-1 rounded-sm text-xs p-0.5 bg-green2 text-gray-300" href={project.deploymentURL}>
										Click here
									</a>
								) : (
									'-'
								)}
							</div>
							<div className="flex text-lg items-center">
								<span>Frontend Repository :&nbsp;</span>
								{project.frontendRepositoryURL ? (
									<a className="border-1 rounded-sm text-xs p-0.5 bg-green2 text-gray-300" href={project.frontendRepositoryURL}>
										Click here
									</a>
								) : (
									'-'
								)}
							</div>
							<div className="flex text-lg items-center">
								<span>Backend Repository :&nbsp;</span>
								{project.backendRepositoryURL ? (
									<a className="border-1 rounded-sm text-xs p-0.5 bg-green2 text-gray-300" href={project.backendRepositoryURL}>
										Click here
									</a>
								) : (
									'-'
								)}
							</div>
						</div>
						<div>
							<p className="text-xl mb-1 text-gray-300 font-bold">Relative Skills</p>
							<ul className="flex gap-2 flex-wrap text-xl">
								{project.skills.map((skill: string, index) => (
									<li
										className={`border-3 rounded-xl font-bold p-1 ${
											selectedSkillsArray.includes(skill) ? 'bg-purple4' : 'bg-green2'
										}`}
										key={index}
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
