import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from "react-redux";

const TaskList = () => {
    const tasks_ = useSelector((state) => state.taskform.task);
    if (tasks_ != null) {
        const renderedList = tasks_.map(task => {
            return (
                <TaskItem
                    //onTaskSelect={onTaskSelect}
                    task={task}
                />
            );
        });

        return <div className="ui celled list">{renderedList}</div>;
    }
    return <div>Empty List</div>
};

export default TaskList;