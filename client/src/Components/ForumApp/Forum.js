import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ForumApp from './ForumApp';

class Forum extends Component {

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
          <Link to="/Forum" class="active item">
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
        <div class="twelve wide stretched column">
          <div class="ui segments">
            <ForumApp />
          </div>
        </div>
      </div>
    )
  }
}

export default Forum;