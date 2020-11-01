import React from 'react';
import TaskList from './TaskList';
import { NavLink} from 'react-router-dom';

class TaskListApp extends React.Component {

    state = { tasks: [], selectedTask: null };

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
                            <NavLink to="/TaskApp" class="item">
                                Add Task
                            </NavLink>
                            <NavLink to="/TaskListApp" class="item active">
                                Task List
                            </NavLink>
                        </div>
                    </div>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <header>List of Tasks</header>
                            <TaskList/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskListApp;