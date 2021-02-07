import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import VacationChart from './VacationChart';
import {routeHelper} from "../../utils/routeHelper";

class VacationChartApp extends Component {

    render() {
        return (
            <div>
                <div class="ui secondary  menu">
                <Link to={routeHelper("Welcome")} class="item">
                        Home
                </Link>
                    <Link to={routeHelper("TaskApp")} class="item">
                        Project Management
                    </Link>
                    <Link to={routeHelper("DefectApp")} class="item">
                        Defect Management
                    </Link>
                    <Link to={routeHelper("Forum")} class="item">
                        Forum
                </Link>
                <Link to={routeHelper("VacationApp")} class="item active">
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
                            <Link to={routeHelper("VacationApp")} class="item">
                                Add Vacation
                            </Link>
                            <Link to={routeHelper("VacationChartApp")} class="item active">
                                Vacation Chart
                                </Link>
                                <Link to={routeHelper("TimesheetFormApp")} class="item">
                                Timesheet
                                </Link>
                    </div>
                </div>
                <div class="twelve wide stretched column">
                    <div class="ui segment">
                        <VacationChart />
                    </div>
                </div>
            </div>
      </div >
    );
    }
}

export default VacationChartApp;  