import { useState } from 'react';

export default function SkillsFilter({ skillsArray }: { skillsArray: string[] }) {
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	const handleSkillClick = (skill: string) => {
		setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]));
		console.log('Selected:', skill);
	};

	return (
		<div>
			{skillsArray.map((skill) => (
				<p key={skill} onClick={() => handleSkillClick(skill)}>
					{skill}
				</p>
			))}
			<div>
				<strong>Selected Skills:</strong> {selectedSkills.join(', ')}
			</div>
		</div>
	);
}
