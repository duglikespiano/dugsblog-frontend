import { useStore } from '@nanostores/react';
import { skillsStore, projectsStore } from '../../common/stores';
import { allOfSkillsIhaveTried, allOfMyProjects } from '../../common/variables';
import type { ProjectObjectType } from '../../common/variables';

export default function SkillsFilter() {
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
			const sortedProjects = filteredProjects.sort((a, b) => new Date(b.period[0]).getTime() - new Date(a.period[0]).getTime());
			projectsStore.set(Array.from(new Set(sortedProjects)) as ProjectObjectType[]);
		}
	};

	return (
		<section
			id="skillsFilter"
			className="relative pb-15 after:content-[''] after:w-full after:h-0.5 after:bg-gray3 after:block after:absolute after:bottom-0 after:left-0"
		>
			<ul className="border-6 rounded-4xl flex p-5 flex-wrap gap-3">
				{selectedSkills.map((skill, index: number) => (
					<li
						className={`flex justify-center items-center border-3 rounded-2xl p-2 text-2xl cursor-pointer select-none ${
							skill.isSelected ? 'bg-purple' : 'bg-green2'
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
