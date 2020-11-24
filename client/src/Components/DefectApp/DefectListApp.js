import React from 'react';
import {NavLink, Link} from "react-router-dom";
import DefectList from "./DefectList"
import {routeHelper} from "../../utils/routeHelper"

const DefectListApp = () => {
    return  (
        <div className="DefectListApp">

                <div class="ui secondary  menu">
          <Link to={routeHelper("Welcome")}class="item">
            Home
                </Link>
          <Link to={routeHelper("TaskApp")} class="item">
            Project Management
                </Link>
          <Link to={routeHelper("/DefectApp")} class="item active">
            Defect Management
                </Link>
                <Link to={routeHelper("/Forum")} class="item">
            Forum
                </Link>
                <Link to={routeHelper("/VacationApp")} class="item">
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
                            <Link to={routeHelper("/DefectApp")} class="item">
                                Add Defect
                            </Link>
                            <Link to={routeHelper("/DefectListApp")} class="item active">
                                Defect List
                            </Link>
                        </div>
                    </div>
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                            <DefectList />
                        </div>
                    </div>
                </div>
    
    </div>
    );
};

export default DefectListApp;