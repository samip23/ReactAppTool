import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ProjectForm from "./ProjectForm.js";

class ProjectFormApp extends React.Component {

    state = { tasks: [], selectedTask: null };

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
                    <Link to="/Forum" class="item">
                        Forum
                </Link>
                <Link to="/VacationApp" class="item">
                        HR
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
                            <NavLink to="/TaskApp" class="item">
                                Add Task
                            </NavLink>
                            <NavLink to="/TaskListApp" class="item">
                                Task List
                            </NavLink>
                            <NavLink to="/GanttChart" class="item">
                                Gantt Chart
                            </NavLink>
                            <NavLink to="/GanttFormApp" class="item">
                                Gantt Form
                            </NavLink>
                            <NavLink to="/ProjectFormApp" class="item active">
                                Project Form
                            </NavLink>
                        </div>
                    </div>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <h1>Add Project</h1>
                            <ProjectForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectFormApp;