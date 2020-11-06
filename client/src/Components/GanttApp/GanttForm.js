import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DatePickerApp from "../Utlities/DatePickerApp";
import './GanttForm.scss';
import { addGanttTask } from "../../redux/GanttForm/action.js";
import uniqid from "uniqid";

const GanttForm = () => {

    const [newTask, setNewTask] = useState({
        taskName: "",
        startDate_: new Date(),
        endDate_: new Date(),
        id: "",
    });

    const [tasks, setTasks] = useState([]);
    const { taskName, startDate_, endDate_, id} = newTask;
    const dispatch = useDispatch();

    //const tasks_ = useSelector((state) => state.taskform.task);
    const tasks_ = useSelector((state) => state.gantt.task);
    const date_ = useSelector(state => state.gantt.date);
    console.log('date_', date_)
    const {start, end} = date_;
    useEffect(() => {
        //console.log(tasks_)
        setTasks(tasks_);
        //setNewTask({...newTask, startDate, endDate})
    }, [tasks_, start, end]);

    const onInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "taskName") {
            setNewTask({ taskName: value });
        }

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        console.log('button', start, end)
        if (taskName !== "") {
            const id = uniqid();
            setNewTask({ ...newTask, id });
            dispatch(addGanttTask(taskName, start,end,id));
            document.getElementById("gantt-form").submit();
        } else {
            alert("Make sure all fields have been entered");
        }
    };

    return (
        <div>
            <form id="gantt-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Task Name:</label>
                    <input
                        name="taskName"
                        type="text"
                        value={taskName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Start Date:</label>
                    <DatePickerApp type={{mode: "gantt", id, key: 1}}/>
                </div>
                <div className="field">
                    <label>End Date:</label>
                    <DatePickerApp type={{mode: "gantt", key: 2, id}}/>
                </div>
                {/*}
                <div class="field">
                    <label>Color</label>
                    <Dropdown text='black'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='orange' />
                            <Dropdown.Item text='green' />
                            <Dropdown.Item text='red'/>
                            <Dropdown.Item text='blue' />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                */}
                <div className="gantt-form-btn">
                    <button class="ui button" type="submit" onClick={onFormSubmit} >
                        Add to Gantt
                        </button>
                </div>
            </form>
        </div>
    )
};

export default GanttForm;