import React from "react";
import { Tooltip } from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "./CommitHistory.css";

export default function CommitHistory() {
  return (
    <section id="commit-history" className="flex justify-center pt-15 pb-15">
      <OverlayScrollbarsComponent defer>
        <GitHubCalendar
          username="duglikespiano"
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
          labels={{
            totalCount: `{{count}} activities for the past year`,
          }}
        />
      </OverlayScrollbarsComponent>
      <Tooltip id="react-tooltip" />
    </section>
  );
}
