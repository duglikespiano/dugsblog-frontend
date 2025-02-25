import { useStore } from '@nanostores/react';
import { projectsStore } from '../../common/stores';

export default function Projects() {
	const filteredProjects = useStore(projectsStore);
	return (
		<>
			<ul className="pt-30 flex flex-col gap-10">
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
							<ul className="flex gap-2 text-xl">
								{project.skills.map((skill) => (
									<li className="border-3 rounded-xl p-1">{skill}</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
