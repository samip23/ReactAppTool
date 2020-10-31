import React, { useState } from "react";
import ListItems from "./ListItems";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DatePicker from 'react-datepicker';
//import TaskInput from "./TaskInput";

library.add(faTrash);

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //items: [{assignee: "Sam", text: [{task: "task1", priority: 1}, {task2: "task2", priority: 2} ]}, {assignee: "Kev", [task1, task2]}]
      items: [],
      currentItem: {
        assignee: "",
        text: [{ task: "", priority: "" }],
        deadline: "",
        progress: "",
      },
      show: false
    };

    // assignee: Sam ,   task: Task1, Task2, Task3


    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(this.state.currentItem.text);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: [{ task: "", priority: "" }],
          assignee: "",
          //priority: "",
          deadline: "",
          progress: "",
          key: "",
        },
      });
    }
    console.log(this.state.items);
  }
  handleInput(event) {
    const { name, value } = event.target;
    //console.log(event.target.value);

    if (name === "task") {
      this.setState({
        ...this.state,
        currentItem: {
          ...this.state.currentItem,
          text: [{ task: value, priority: this.state.currentItem.text[0].priority }]
        },
      });
    }

    if (name === "assignee") {
      this.setState({
        ...this.state,
        currentItem: {
          ...this.state.currentItem,
          assignee: value,
        },
      });
    }

    if (name === "priority") {
      this.setState({
        ...this.state,
        currentItem: {
          ...this.state.currentItem,
          text: [{ task: this.state.currentItem.text[0].task, priority: value }]
        },
      });
    }


  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, assignee, priority, key) {
    //console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        //console.log(item.key + "    " + key);
        item.text = text;
        item.assignee = assignee;
        item.priority = priority;
      }
    });
    this.setState({
      items: items,
    });
  }
  /*
    addTaskInput = (e) => {
  
      this.setState({
        ...this.state,
        currentItem: {
          ...this.state.currentItem,
          text: [{ task: "", priority: "" }]
        },
        show: true
      });
    }
  */


  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Tasks Report";
    const headers = [["Name", "Task", "Priority"]];

    const data = this.state.items.map(elt => [elt.assignee, elt.text[0].task, elt.text[0].priority]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("taskreport.pdf")
  }

  handleDeadlineChange = date => {
    this.setState({
      ...this.state,
      currentItem: {
        ...this.state.currentItem,
        deadline: date,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter task"
              name="task"
              value={this.state.currentItem.text[0].task}
              onChange={this.handleInput}
            ></input>
            <input
              type="text"
              placeholder="Enter assignee"
              name="assignee"
              value={this.state.currentItem.assignee}
              onChange={this.handleInput}
            ></input>
            <input
              type="text"
              placeholder="Enter priority"
              name="priority"
              value={this.state.currentItem.text[0].priority}
              onChange={this.handleInput}
            ></input>
            <div>
              <DatePicker placeholderText="Deadline" selected={this.state.currentItem.deadline} onChange={this.handleDeadlineChange} />
            </div>
            <button type="submit">Add</button>
          </form>

          <p>{this.state.items.text}</p>
          <p>{this.state.items.assignee}</p>
          <p>{this.state.items.priority}</p>
          <p>{this.state.items.deadline}</p>
          <p>{this.state.items.progress}</p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
        <div><button onClick={() => this.exportPDF()}>Generate Report</button></div>
      </div>

    );
  }
}


/*

function TaskInput({tasks}) {
  const [inputTask, setInputTask] = useState("")
   const [inputPriority, setInputPriority] = useState("")

  function handleAdditionInput(event){
    const { name, value } = event.target;

    if (name === "task2") {
        setInputTask(value) 
    }

    if (name === "priority2") {
        setInputPriority(value)
    }
  }

  function addAdditionalItem(e) {
    e.preventDefault();
    //items: [{assignee: "Sam", text: [{task: "task1", priority: 1}, {task2: "task2", priority: 2} ]}, {assignee: "Kev", [task1, task2]}

    const newTask = {task: inputTask, priority: inputPriority}
    items.find(assignee).push()
items[1].

    if (newItem.text !== "") {
      const items = [tasks.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: [{ task: "", priority: 0 }],
          assignee: "",
          //priority: "",
          progress: "",
          key: "",
        },
      });
    }
  }

    return (
      <div>
        <form onSubmit={this.addAdditionalItem}>
          <label>Task:</label>
          <input
            type="text"
            placeholder="Enter task"
            name="task2"
            value={inputTask}
            onChange={this.handleAdditionInput}
          />
          <label>Priority:</label>
          <input
            type="text"
            placeholder="Enter priority"
            name="priority2"
            value={inputPriority}
            onChange={this.handleAdditionInput}
          />
        </form>
      </div>
    )
  }
*/

export default Tasks;