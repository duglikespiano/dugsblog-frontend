import GitHubCalendar from 'react-github-calendar';

export default function CommitHistory() {
	return (
		<div className="flex justify-center">
			<GitHubCalendar username="duglikespiano" colorScheme="dark" />
		</div>
	);
}
