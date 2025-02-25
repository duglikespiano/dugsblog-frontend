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
					<li className="border-6 rounded-4xl p-5" key={project.id}>
						<div className="flex flex-col mb-3">
							<p className="text-5xl">{project.title}</p>
							<p className="text-3xl">{project.descriptionEn}</p>
						</div>
						<div className="flex flex-col mb-3">
							<div className="flex text-xl">
								Frontend Repository:{' '}
								<p>{project.frontendRepositoryURL ? <a href={project.frontendRepositoryURL}>Click here</a> : '-'}</p>
							</div>
							<div className="flex text-xl">
								Backend Repository: <p>{project.backendRepositoryURL ? project.backendRepositoryURL : '-'}</p>
							</div>
						</div>
						<div>
							<p className="text-xl mb-1">Relative Skills</p>
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
