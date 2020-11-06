import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import VacationChart from './VacationChart';

class VacationChartApp extends Component {

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
                    <Link to="/DefectApp" class="item">
                        Defect Management
                    </Link>
                    <Link to="/Forum" class="item">
                        Forum
                </Link>
                    <Link to="/VacationApp" class="active item">
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
                            <Link to="/VacationApp" class="item">
                                Add Vacation
                            </Link>
                            <Link to="/VacationChartApp" class="item active">
                                Vacation Chart
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