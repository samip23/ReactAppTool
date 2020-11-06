import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from "../Components/Welcome";
import Projects from "../Components/Projects";
import Requests from "../Components/Requests";
import Schedule from "../archive/Schedule";
import TaskApp from "../Components/TaskApp/TaskApp";
import TaskListApp from "../Components/TaskApp/TaskListApp";
import DefectApp from "../Components/DefectApp";
import GanttChart from "../Components/GanttApp/GanttChart";
import Forum from "../Components/ForumApp/Forum";
import GanttFormApp from "../Components/GanttApp/GanttFormApp";
import VacationApp from "../Components/VacationApp/VacationApp";
import VacationChartApp from "../Components/VacationApp/VacationChartApp";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/Welcome'  exact component={Welcome} />
            <Route path='/Projects' exact component={Projects} /> 
            <Route path='/Requests' exact component={Requests} />  
            <Route path='/Schedule' component={Schedule} />   
            <Route path='/TaskApp' component={TaskApp} />   
            <Route path="/TaskListApp" component={TaskListApp}  />
            <Route path="/DefectApp" component={DefectApp} />
            <Route path="/GanttChart" component={GanttChart} />
            <Route path="/Forum" component={Forum} />
            <Route path="/GanttFormApp" component={GanttFormApp} />
            <Route path="/VacationApp" component={VacationApp} />
            <Route path="/VacationChartApp" component={VacationChartApp} />
        </Switch>
    )
}

export default Routes;  