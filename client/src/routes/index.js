import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from "../Components/Welcome";
import SignIn from "../Components/SignIn/index";
import Projects from "../Components/Projects";
import Requests from "../Components/Requests";
import Schedule from "../Components/Schedule";
import TaskApp from "../Components/TaskApp";
import TaskListApp from "../Components/TaskListApp";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/Welcome'  exact component={Welcome} />
            <Route path='/Projects' exact component={Projects} /> 
            <Route path='/Requests' exact component={Requests} />  
            <Route path='/Schedule' component={Schedule} />   
            <Route path='/TaskApp' component={TaskApp} />   
            <Route path="/TaskListApp" component={TaskListApp}  />
        </Switch>
    )
}

export default Routes;  