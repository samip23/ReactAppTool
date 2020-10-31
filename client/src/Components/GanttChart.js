import React, { Component } from 'react';
import { DayPilotGantt } from "daypilot-pro-react";

function GanttChart({ tasksInput }) {

  return (
    <div>
      <DayPilotGantt
        startDate={"2020-10-01"}
        days={60}
        tasks={tasksInput.map(task => {
          return {
            "id": "1",
            "text": tasksInput.stage,
            "start": "2019-10-04T00:00:00",
            "end": tasksInput.end,
          }
        }
        )}
      />
    </div>
  );
}

export default GanttChart;