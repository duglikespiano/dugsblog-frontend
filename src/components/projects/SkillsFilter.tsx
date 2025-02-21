import { skillsOriginalStore, skillsSelectedStore } from '../../common/stores';

export default function SkillsFilter({ skillsArray }: { skillsArray: string[] }) {
	const handleSetSkills = (index: number) => {
		skillsSelectedStore.set(index);
	};

	return (
		<section className="border-6 rounded-4xl flex p-5 flex-wrap gap-3">
			{skillsArray.map((skill, index) => (
				<p
					className={`flex justify-center items-center border-3 rounded-2xl p-2 text-2xl cursor-pointer`}
					onClick={() => handleSetSkills(index)}
					key={Math.random()}
				>
					{skill}
				</p>
			))}
		</section>
	);
}
