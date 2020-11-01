import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DatePicker from "./DatePickerApp";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/TaskForm/action.js";

const TaskForm = () => {
  const [newTask, setNewTask] = useState({
    taskName: "",
    taskAssignee: "",
    taskPriority: "",
    date: "",
  });

  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [startDate, setStartDate] = useState();
  const { taskName, taskAssignee, taskPriority, date } = newTask;
  const dispatch = useDispatch();

  const tasks_ = useSelector((state) => state.taskform.task);

  useEffect(() => {
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

  console.log(
    "show me tasks",
    useSelector((state) => state.tasks)
  );

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (taskName !== "" && taskAssignee !== "" && taskPriority !== "") {
      setNewTask({ ...newTask, date: startDate });
      dispatch(addTask(taskName, taskAssignee, taskPriority, date));
      document.getElementById("task-form").submit();
    } else {
      alert("Make sure all fields have been entered");
    }
  };

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Tasks Report";
    const headers = [["Name", "Task", "Priority"]];

    const data = tasks.map((elt) => [
      elt.taskAssignee,
      elt.taskName,
      elt.taskPriority,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("task_report.pdf");
  };

  const onTaskSelect = (task) => {
    setSelectedTask(task);
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
          <button class="ui button" onClick={exportPDF}>
            Generate Report
          </button>
          {/*
          <div>
            <br />
            {tasks.length > 1 ? <h3>Tasks</h3> : ""}
            <TaskList tasks={tasks} onTaskSelect={onTaskSelect} />
            <br />
            <TaskDetail task={selectedTask} />
          </div>
          */}
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
