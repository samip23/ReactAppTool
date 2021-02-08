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
import ScenariosFormApp from "../Components/ScenariosFormApp";
import Login  from '../Components/Login';

function Routes() {
    return (
        <Switch>
            {/* <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool" : '/'} exact component={Welcome} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/TaskApp" : '/TaskApp'} component={TaskApp} />   
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/Welcome" : '/Welcome'} component={Welcome} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/TaskListApp" : '/TaskListApp'} component={TaskListApp}  />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/DefectApp" : '/DefectApp'} component={DefectApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/DefectListApp" : '/DefectListApp'} component={DefectListApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/GanttChart" : '/GanttChart'} component={GanttChart} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/Forum" : '/Forum'} component={Forum} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/GanttFormApp" : '/GanttFormApp'} component={GanttFormApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/VacationApp" : '/VacationApp'} component={VacationApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/VacationChartApp" : '/VacationChartApp'} component={VacationChartApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/TimesheetFormApp" : '/TimesheetFormApp'} component={TimesheetFormApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/ProjectFormApp" : '/ProjectFormApp'} component={ProjectFormApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/ProjectListApp" : '/ProjectListApp'} component={ProjectListApp} />
            <Route path={process.env.NODE_ENV === "production" ? "/ReactAppTool/ScenariosFormApp" : '/ScenariosFormApp'} component={ScenariosFormApp} /> */}
            <Route path= {'/ScenariosFormApp'} exact component={Welcome} />
            <Route path= {'/TaskApp'} component={TaskApp} />   
            <Route path= {'/Welcome'} component={Welcome} />
            <Route path= {'/TaskListApp'} component={TaskListApp}  />
            <Route path= {'/DefectApp'} component={DefectApp} />
            <Route path= {'/DefectListApp'} component={DefectListApp} />
            <Route path= {'/GanttChart'} component={GanttChart} />
            <Route path= {'/Forum'} component={Forum} />
            <Route path= {'/GanttFormApp'} component={GanttFormApp} />
            <Route path= {'/VacationApp'} component={VacationApp} />
            <Route path= {'/VacationChartApp'} component={VacationChartApp} />
            <Route path= {'/TimesheetFormApp'} component={TimesheetFormApp} />
            <Route path= {'/ProjectFormApp'} component={ProjectFormApp} />
            <Route path= {'/ProjectListApp'} component={ProjectListApp} />
            <Route path= {'/ScenariosFormApp'} component={ScenariosFormApp} />
        </Switch>
    )
}

export default Routes;  