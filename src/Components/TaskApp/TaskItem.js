import React from 'react';

const TaskItem = ({ idx, task, onTaskSelect }) => {
    return (
        <div onClick={() => onTaskSelect(idx)} className="item">
            <div className="content">
                <div class="header">
                    <label style={{ cursor: "pointer" }}>Task Name: </label>
                    {task.taskName}
                </div>
                <div class="description">
                    <div>
                        <label style={{ cursor: "pointer" }}>Assigned to: </label>
                        {task.taskAssignee}
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>Priority of Task: </label>
                        {task.taskPriority}
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>Deadline: </label>
                        {task.date == undefined ? "" : task.date.substring(0, 10)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskItem;