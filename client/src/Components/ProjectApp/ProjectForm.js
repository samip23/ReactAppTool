import React, { useEffect, useState } from "react";
import DatePickerApp from "../Utlities/DatePickerApp";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/TaskForm/action.js";
import uniqid from "uniqid";
import { Segment } from "semantic-ui-react";

const ProjectForm = () => {
    const [newTask, setNewTask] = useState({
        taskName: "",
        taskAssignee: "",
        taskPriority: "",
        date: new Date(),
        id: "",
        progressV: 0,
        inputProgress: null
    });

    const [tasks, setTasks] = useState([]);
    const [startDate, setStartDate] = useState();
    const { taskName, taskAssignee, taskPriority, date } = newTask;
    const dispatch = useDispatch();

    const tasks_ = useSelector((state) => state.taskform.task);
    const date_ = useSelector((state) => state.datepicker.date);

    const [inputFields, setInputField] = useState([
        { stageName: "", startDate: new Date(), endDate: new Date() },
    ]);

    useEffect(() => {
        console.log(tasks_)
        setTasks(tasks_);
    }, [tasks_]);

    const onInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "taskName") {
            setNewTask({ ...newTask, taskName: value });
        }

        if (name === "taskAssignee") {
            setNewTask({ ...newTask, taskAssignee: value });
        }

        if (name === "taskPriority") {
            setNewTask({ ...newTask, taskPriority: value });
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (taskName !== "" && taskAssignee !== "" && taskPriority !== "") {
            const id = uniqid();
            setNewTask({ ...newTask, date: date_, id });
            dispatch(addTask(taskName, taskAssignee, taskPriority, date_, id));
            document.getElementById("task-form").submit();
        } else {
            alert("Make sure all fields have been entered");
        }
    };

    return (
        <div>
            <form id="project-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Project Name:</label>
                    <input
                        name="taskName"
                        type="text"
                        value={taskName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Assigned To:</label>
                    <input
                        name="taskAssignee"
                        type="text"
                        value={taskAssignee}
                        onChange={onInputChange}
                    />
                </div>
                <Segment.Group horizontal>
                    {inputFields.map((inputField, index) => (
                        <div key={index}>
                            <Segment>
                                <div className="field">
                                    <label>Stage:</label>
                                    <input
                                        name="stageName"
                                        type="text"
                                        value={inputField.stageName}
                                        onChange={onInputChange}
                                    />
                                </div>
                            </Segment>
                            <Segment>
                                <div className="field">
                                    <label>Start Date:</label>
                                    <DatePickerApp type={{ mode: "project" }} />
                                </div>
                            </Segment>
                            <Segment>
                                <div className="field">
                                    <label>End Date:</label>
                                    <DatePickerApp type={{ mode: "project" }} />
                                </div>
                            </Segment>
                            <div>
                                <button>+</button>
                                <button>-</button>
                            </div>
                        </div>
                    ))}
                </Segment.Group>
                <div className="task-form-btn">
                    <button onClick={onFormSubmit} class="ui button" type="submit">
                        Submit
          </button>
                </div>
            </form>
        </div>
    );
};
export default ProjectForm;
