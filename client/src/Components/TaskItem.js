import React from 'react';

const TaskItem = ({ task, onTaskSelect }) => {
    return (
        <div onClick={() => onTaskSelect(task)} className="item">
            <div className="content">
                <div>
                    <label style={{cursor: "pointer"}}>Task Name: </label>
                    {task.taskName}
                </div>
                <div>
                    <label style={{cursor: "pointer"}}>Assigned to: </label>
                    {task.taskAssignee}
                </div>
                <div>
                    <label style={{cursor: "pointer"}}>Priority of Task: </label>
                    {task.taskPriority}
                </div>
            </div>
        </div>
    )
}

export default TaskItem;