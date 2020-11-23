import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from "../Components/Welcome";
import TaskApp from "../Components/TaskApp/TaskApp";
import TaskListApp from "../Components/TaskApp/TaskListApp";
import DefectApp from "../Components/DefectApp/DefectApp";
import GanttChart from "../Components/GanttApp/GanttChart";
import Forum from "../Components/ForumApp/Forum";
import GanttFormApp from "../Components/GanttApp/GanttFormApp";
import VacationApp from "../Components/VacationApp/VacationApp";
import VacationChartApp from "../Components/VacationApp/VacationChartApp";
import TimesheetFormApp from "../Components/TimesheetApp/TimesheetFormApp";
import ProjectFormApp from "../Components/ProjectApp/ProjectFormApp";
import DefectListApp from "../Components/DefectApp/DefectListApp";
import ProjectListApp from "../Components/ProjectApp/ProjectListApp";

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Welcome} />
            <Route path='/Welcome' component={Welcome} />
            <Route path='/TaskApp' component={TaskApp} />   
            <Route path="/TaskListApp" component={TaskListApp}  />
            <Route path="/DefectApp" component={DefectApp} />
            <Route path="/DefectListApp" component={DefectListApp} />
            <Route path="/GanttChart" component={GanttChart} />
            <Route path="/Forum" component={Forum} />
            <Route path="/GanttFormApp" component={GanttFormApp} />
            <Route path="/VacationApp" component={VacationApp} />
            <Route path="/VacationChartApp" component={VacationChartApp} />
            <Route path="/TimesheetFormApp" component={TimesheetFormApp} />
            <Route path="/ProjectFormApp" component={ProjectFormApp} />
            <Route path="/ProjectListApp" component={ProjectListApp} />
        </Switch>
    )
}

export default Routes;  