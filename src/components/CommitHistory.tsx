import React from 'react';
import { Tooltip } from 'react-tooltip';
import GitHubCalendar from 'react-github-calendar';

export default function CommitHistory() {
	return (
		<>
			<GitHubCalendar
				username="duglikespiano"
				renderBlock={(block, activity) =>
					React.cloneElement(block, {
						'data-tooltip-id': 'react-tooltip',
						'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
					})
				}
			/>
			<Tooltip id="react-tooltip" />
		</>
	);
}
