import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import { setProgress } from "../../redux/ProjectApp/action.js"
import { Link } from 'react-router-dom';
import ScenariosForm from '../ScenariosForm.js';
import {scenarioEnabled} from "../../redux/ScenarioEnabler";

const ProjectDetail = ({ idx }) => {

    console.log("project id", idx)
    const todayDate = new Date();

    const [progressV, setProgressV] = useState();
    const projects = useSelector(state => state.project.project);
    const dispatch = useDispatch();

    const project = projects[idx];

    const progressV_by_idx = useSelector(state => {
        if (state.project.project[idx] !== undefined) {
            return state.project.project[idx].progressV;
        }
        return 0;
    })

    function handleProgressUpdate(e) {
        setProgressV(e.target.value)

    }

    function handleButtonClick() {
        if (progressV > 0 && progressV < 101) {
            dispatch(setProgress(idx, progressV));
            setProgressV("");
        }
        else alert("Invalid value was entered")
    }

    const scenariosEnabled = useSelector(state => state.scenarioEnabler.scenarioEnabled)
    
    function handleTestScenarioClick() {
        dispatch(scenarioEnabled(true));
    }

    function calculateDaysRemain() {
        const diff = Date.parse(project.end) - todayDate.getTime()
        if (diff > 0) return Math.abs(Math.round(diff / 1000 / 60 / 60 / 24)).toString() + " Day(s) Remaining"
        return Math.abs(Math.round(diff / 1000 / 60 / 60 / 24)).toString() + " Day(s) overdue"
    }


    if (!project) {
        return <div>Loading...</div>;
    }

    if (scenariosEnabled) {
        return (
            <div>
                <ScenariosForm projectName={project.projectName} projectId = {idx}/>
            </div>
        )
    }

    return (
        <div>
            <div className="ui segment">
                <h3>Selected Project - More Details</h3>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Assignee</th>
                            <th>Project Milestones</th>
                            <th>Project's Progress</th>
                            <th>Project's Timeline</th>
                            <th>Days Remaining</th>
                            <th>Test Scenarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Project Name">{project.projectName}</td>
                            <td data-label="Project Assignee">{project.projectAssignee}</td>
                            <td data-label="Project Milestones">{project.projectMilestones}</td>
                            <td style={{ width: "120%" }} data-label="Task Progress">
                                <p>
                                    <input type="text" style={{ width: "80%" }} placeholder="Enter Progress (%)" value={progressV} onChange={handleProgressUpdate} />
                                    <button style={{ margin: "0 4px" }} type="submit" onClick={handleButtonClick}>Set</button>
                                </p>
                                <LinearProgress variant="determinate" value={progressV_by_idx} />
                                <label>Current Progress: {progressV_by_idx}%</label>
                            </td>
                            <td style={{ width: "120%" }} data-label="Project Timeline">{project.start.substring(0, 10)} - {project.end.substring(0, 10)}</td>
                            <td data-label="Days to Deadline">{calculateDaysRemain()}</td>
                            <td data-label="Test Scenarios">
                                <button type="submit" onClick={handleTestScenarioClick}>Test Scenarios
                                    {/*<Link to={{pathname: '/ScenariosFormApp', projectProps: { name: project.projectName } }}>Test Scenarios</Link>*/}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectDetail;