import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from "../Components/Welcome";
import SignIn from "../Components/SignIn/index";
import Tasks from "../Components/Tasks";
import Projects from "../Components/Projects";
import Requests from "../Components/Requests";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/Welcome'  component={Welcome} />
            <Route path='/Tasks'   component={Tasks} /> 
            <Route path='/Projects' component={Projects} /> 
            <Route path='/Requests' component={Requests} />         
        </Switch>
    )
}

export default Routes;  