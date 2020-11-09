import React, { useEffect, useState } from "react";
import DatePickerApp from "../Utlities/DatePickerApp";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import { Segment } from "semantic-ui-react";
import { addProject } from "../../redux/ProjectApp/action.js";

const ProjectForm = () => {
    const [newProject, setNewProject] = useState({
        projectName: "",
        projectAssignee: "",
        projectMilestones: "",
        startDate_: new Date(),
        endDate_: new Date(),
        id: "",
    });

    const [projects, setProjects] = useState([]);
    const { projectName, projectAssignee, projectMilestones, startDate_, endDate_, id} = newProject;
    const dispatch = useDispatch();

    const projects_ = useSelector((state) => state.project.project);
    const date_ = useSelector(state => state.project.date);
    const {start, end} = date_;

    useEffect(() => {
        setProjects(projects_);
    }, [projects_, start, end]);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (projectName !== "" && projectAssignee !== "" && projectMilestones !== "") {
            const id = uniqid();
            setNewProject({ ...newProject, id });
            dispatch(addProject(projectName, projectAssignee, projectMilestones, start,end,id));
            document.getElementById("project-form").submit();
        } else {
            alert("Make sure all fields have been entered");
        }
    };

    return (
        <div>
            <form id="project-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Project Name:</label>
                    <input
                        name="projectName"
                        type="text"
                        value={projectName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Assigned To:</label>
                    <textarea
                        name="projectAssignee"
                        type="text"
                        rows="2"
                        value={projectAssignee}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Project Milestones:</label>
                    <textarea
                        name="projectMilestones"
                        type="text"
                        rows="4"
                        value={projectMilestones}
                        onChange={onInputChange}
                    />
                </div>
                <Segment.Group horizontal>
                    <Segment>
                        <div className="field">
                            <label>Start Date:</label>
                            <DatePickerApp type={{ mode: "project", key:1}} />
                        </div>
                    </Segment>
                    <Segment>
                        <div className="field">
                            <label>End Date:</label>
                            <DatePickerApp type={{ mode: "project", key: 2 }} />
                        </div>
                    </Segment>
                </Segment.Group>
                <div className="project-form-btn">
                    <button onClick={onFormSubmit} class="ui button" type="submit">
                        Add Project
                    </button>
                </div>
            </form>
        </div >
    );
};
export default ProjectForm;
