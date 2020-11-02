import React, { useEffect, useState } from "react";
import DatePicker from "./DatePickerApp";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/TaskForm/action.js";
import uniqid from "uniqid";

const TaskForm = () => {
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
      setNewTask({ ...newTask, date: date_, id});
      dispatch(addTask(taskName, taskAssignee, taskPriority, date_, id));
      document.getElementById("task-form").submit();
    } else {
      alert("Make sure all fields have been entered");
    }
  };

  return (
    <div>
      <form id="task-form" className="ui form" /* onSubmit={onFormSubmit} */>
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
          <label>Assigned To:</label>
          <input
            name="taskAssignee"
            type="text"
            value={taskAssignee}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Task Priority:</label>
          <input
            name="taskPriority"
            type="text"
            value={taskPriority}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Deadline:</label>
          <DatePicker />
        </div>
        <div>
          <button onClick={onFormSubmit} class="ui button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
