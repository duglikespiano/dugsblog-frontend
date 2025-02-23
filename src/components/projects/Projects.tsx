import { useStore } from '@nanostores/react';
import { projectsStore } from '../../common/stores';

export default function Projects() {
	const filteredProjects = useStore(projectsStore);
	return (
		<ul>
			{filteredProjects.map((project) => (
				<li key={Math.random()}>{project.title}</li>
			))}
		</ul>
	);
}
