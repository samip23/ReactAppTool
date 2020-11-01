import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';

class Welcome extends Component {

    render(){
    return (
        <div>
        <h1>Welcome Page</h1>

        <nav>
        <ul>
          <li>
            <NavLink to='/Projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/Requests'>Requests</NavLink>
          </li>
          <li>
            <NavLink to='/Schedule'>Schedule</NavLink>
          </li>
          <li>
            <NavLink to='/TaskApp'>TaskApp</NavLink>
          </li>
          <li>
            <NavLink to='/TaskListApp'>TaskListApp</NavLink>
          </li>
        </ul>
      </nav>
      </div>
    );
}
}

export default Welcome;