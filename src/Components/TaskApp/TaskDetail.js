import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import { setProgress } from "../../redux/TaskForm/action.js"
import "./TaskDetail.scss";

const TaskDetail = ({ idx }) => {

    const todayDate = new Date();

    const [progressV, setProgressV] = useState();
    const tasks = useSelector(state => state.taskform.task);
    const dispatch = useDispatch();

    const task = tasks[idx];

    const progressV_by_idx = useSelector(state => {
        if (state.taskform.task[idx] !== undefined) {
            return state.taskform.task[idx].progressV;
        }
        return 0;
    })

    function handleProgressUpdate(e) {
        setProgressV(e.target.value)

    }

    function handleButtonClick() {
        if (progressV > 0 && progressV < 101) {
            dispatch(setProgress(idx, progressV));
            setProgressV("");
        }
        else alert("Invalid value was entered")
    }

    function calculateDaysRemain() {
        const diff = Date.parse(task.date) - todayDate.getTime()
        if (diff > 0) return Math.abs(Math.round(diff/1000/60/60/24)).toString() + " Day(s) Remaining"
        return Math.abs(Math.round(diff/1000/60/60/24)).toString() + " Day(s) overdue"
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
                            <th>Task Deadline</th>
                            <th>Days Remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Task Name">{task.taskName}</td>
                            <td data-label="Task Assignee">{task.taskAssignee}</td>
                            <td data-label="Task Priority">{task.taskPriority}</td>
                            <td style={{ width: "120%" }} data-label="Task Progress">
                                <p>
                                    <input type="text" style={{ width: "80%" }} placeholder="Enter Progress (%)" value={progressV} onChange={handleProgressUpdate} />
                                    <button style={{ margin: "0 4px" }} type="submit" onClick={handleButtonClick}>Set</button>
                                </p>
                                <LinearProgress variant="determinate" value={progressV_by_idx} />
                                <label>Current Progress: {progressV_by_idx}%</label>
                            </td>
                            <td style={{ width: "120%" }} data-label="Task Deadline">{task.date.substring(0, 10)}</td>
                            <td data-label="Days to Deadline">{calculateDaysRemain()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskDetail;