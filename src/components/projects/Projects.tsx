import { useStore } from '@nanostores/react';
import { skillsStore, projectsStore } from '../../common/stores';

export default function Projects() {
	const filteredProjects = useStore(projectsStore);
	const selectedSkills = useStore(skillsStore);
	const selectedSkillsArray = selectedSkills.filter((skill) => skill.isSelected).map((skill) => skill.name);

	return (
		<section id="projects" className="px-20 pt-15">
			<h3 className="text-rosewater font-bold text-5xl">Projects</h3>
			<ul className="flex flex-col gap-10 mt-5">
				{filteredProjects.map((project) => (
					<li className="border-4 rounded-4xl p-8" key={project.id}>
						<p className="text-4xl font-bold text-gray1 mb-3">{project.title}</p>
						<div className="px-6">
							<p className="text-3xl text-gray-400 mb-3">{project.descriptionEn}</p>
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
								<p className="text-2xl mb-1 text-gray-300 font-bold">Relative Skills</p>
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
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
