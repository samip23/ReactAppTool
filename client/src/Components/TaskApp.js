import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import "./TaskApp.css";

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
                    <a class="active item">
                        Home
                    </a>
                    <a class="item">
                        Project Management
                    </a>
                    <a class="item">
                        Defect Management
                    </a>
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
                            <a class="item active">
                                Tasks
                            </a>
                            <a class="item">
                                Projects
                            </a>
                            <a class="item">
                                Teams
                            </a>
                            <a class="item">
                                Defects
                            </a>
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