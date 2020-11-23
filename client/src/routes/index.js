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
    console.log(process.env.NODE_ENV)
    return (
        <Switch>
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/'} exact component={Welcome} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/TaskApp'} component={TaskApp} />   
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/Welcome'} component={Welcome} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/TaskListApp'} component={TaskListApp}  />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/DefectApp'} component={DefectApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/DefectListApp'} component={DefectListApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/GanttChart'} component={GanttChart} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/Forum'} component={Forum} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/GanttFormApp'} component={GanttFormApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/VacationApp'} component={VacationApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/VacationChartApp'} component={VacationChartApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/TimesheetFormApp'} component={TimesheetFormApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/ProjectFormApp'} component={ProjectFormApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/ProjectListApp'} component={ProjectListApp} />
        </Switch>
    )
}

export default Routes;  