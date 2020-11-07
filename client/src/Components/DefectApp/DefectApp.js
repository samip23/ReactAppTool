import React from 'react';
import { Link } from 'react-router-dom';
import "./DefectApp.css";
import DefectForm from "./DefectForm";

class DefectApp extends React.Component {

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
                    <Link to="/TaskApp" class="item">
                        Project Management
                    </Link>
                    <Link to="/DefectApp" class="active item">
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
                            <Link to="/DefectApp" class="item active">
                                Add Defect
                            </Link>
                            <Link to="/DefectListApp" class="item">
                                Defect List
                            </Link>
                        </div>
                    </div>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <DefectForm onFormSubmit={this.onDefectSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DefectApp;