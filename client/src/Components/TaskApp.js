import React from 'react';
import TaskForm from './TaskForm';
import "./TaskApp.css";
import { Link } from 'react-router-dom';
import DefectApp from "./DefectApp";

class TaskApp extends React.Component {

    state = { tasks: [], selectedTask: null };

    onTaskSubmit = (tasks) => {
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <div>
                <div class="ui secondary  menu">
                    <Link to="/Welcome" class="item">
                        Home
                </Link>
                    <Link to="/TaskApp" class="active item">
                        Project Management
                    </Link>
                    <Link to="/DefectApp" class="item">
                        Defect Management
                    </Link>
                    <div class="right menu">
                        <div class="item">
                            <div class="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i class="search link icon"></i>
                            </div>
                        </div>
                        <a class="ui item">
                            Logout
                        </a>
                    </div>
                </div>
                <div class="ui grid">
                    <div class="four wide column">
                        <div class="ui vertical fluid tabular menu">
                            <Link to="/TaskApp" class="item active">
                                Add Task
                            </Link>
                            <Link to="/TaskListApp" class="item">
                                Task List
                            </Link>
                        </div>
                    </div>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <TaskForm onFormSubmit={this.onTaskSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskApp;