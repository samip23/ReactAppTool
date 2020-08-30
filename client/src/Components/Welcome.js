import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';
import Projects from "./Projects";
import Tasks from "./Tasks";

class Welcome extends Component {

    render(){
    return (
        <div>
        <h1>Welcome Page</h1>

        <nav>
        <ul>
          <li>
            <NavLink to='/Tasks'>Tasks</NavLink>
          </li>
          <li>
            <NavLink to='/Projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/Requests'>Requests</NavLink>
          </li>
        </ul>
      </nav>
      </div>
    );
}
}

export default Welcome;