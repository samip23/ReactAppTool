import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskSelect }) => {
    const renderedList = tasks.map(task => {
        return (
            <TaskItem
                onTaskSelect={onTaskSelect}
                task={task}
            />
        );
    });

    return <div className="ui celled list">{renderedList}</div>;
};

export default TaskList;