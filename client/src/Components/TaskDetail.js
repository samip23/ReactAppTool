import React, { useState } from 'react';
import { LinearProgress } from '@material-ui/core';

const TaskDetail = ({ task }) => {

    const [progressV, setProgressV] = useState(0);
    const [inputProgress, setInputProgress] = useState()


    function handleProgressUpdate(e) {
        setProgressV(e.target.value);
        setInputProgress(e.target.value)
    }

    if (!task) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="ui segment">
                <h3>Selected Task - More Details</h3>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Assignee</th>
                            <th>Task Priority</th>
                            <th>Task Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Task Name">{task.taskName}</td>
                            <td data-label="Task Assignee">{task.taskAssignee}</td>
                            <td data-label="Task Priority">{task.taskPriority}</td>
                            <td data-label="Task Progress">
                                <p>
                                    <input type="text" placeholder="Enter Progress (%)" value={inputProgress} onChange={handleProgressUpdate} />
                                </p>
                                <LinearProgress variant="determinate" value={progressV} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskDetail;