import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {routeHelper} from "../utils/routeHelper";

class Welcome extends Component {

  render() {
    let todayDate = new Date();

    return (
      <div>
        <div class="ui secondary  menu">
          <Link to={routeHelper("Welcome")}class="active item">
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
        <div class="twelve wide stretched column">
          <div class="ui segment">
            <h1>Welcome!</h1>
            <br />
            <p>Today is {todayDate.toLocaleString()}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;