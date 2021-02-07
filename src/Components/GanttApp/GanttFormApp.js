import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GanttForm from './GanttForm';
import {routeHelper} from '../../utils/routeHelper';

class GanttFormApp extends React.Component {

    state = { tasks: [], selectedTask: null };

    render() {
        return (
            <div>
                <div class="ui secondary  menu">
                <Link to={routeHelper("Welcome")} class="item">
                        Home
                </Link>
                    <Link to={routeHelper("TaskApp")} class="active item">
                        Project Management
                    </Link>
                    <Link to={routeHelper("DefectApp")} class="item">
                        Defect Management
                    </Link>
                    <Link to={routeHelper("Forum")} class="item">
                        Forum
                </Link>
                <Link to={routeHelper("VacationApp")} class="item">
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
                            <NavLink to={routeHelper("TaskApp")} class="item">
                                Add Task
                            </NavLink>
                            <NavLink to={routeHelper("TaskListApp")} class="item">
                                Task List
                            </NavLink>
                            <NavLink to={routeHelper("GanttChart")} class="item">
                                Gantt Chart
                            </NavLink>
                            <NavLink to={routeHelper("GanttFormApp")} class="item active">
                                Gantt Form
                            </NavLink>
                            <NavLink to={routeHelper("ProjectFormApp")} class="item">
                                Project Form
                            </NavLink>
                            <NavLink to={routeHelper("ProjectListApp")} class="item">
                                Project List
                            </NavLink>
                        </div>
                    </div>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <GanttForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GanttFormApp;