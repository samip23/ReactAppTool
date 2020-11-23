import React, { useState } from 'react';
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ProjectItem from './ProjectItem';
import ProjectDetail from './ProjectDetail.js';
import { Bar } from 'react-chartjs-2';

const ProjectList = () => {

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Projects Report";
        const headers = [["Project", "Analyst(s)", "Project Milestones", "Start Date", "End Date"]];
        const data = project_data.map((elt) => [
            elt.projectName,
            elt.projectAssignee,
            elt.projectMilestones,
            elt.start,
            elt.end
        ]);

        let content = {
            startY: 50,
            head: headers,
            body: data,
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("project_report.pdf");
    };


    const projects_ = useSelector((state) => state.project.project);
    const project_data = Object.values(projects_).slice(1);

    const [activeIndex, setActiveIndex] = useState(null);

    const projectNames = project_data.map((project) => project.projectName);
    const projectProgresses = project_data.map((project) => project.progressV);

    console.log(projectNames)
    console.log(projectProgresses)

    const state = {
        labels: projectNames,
        datasets: [
            {
                label: "Progress",
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: projectProgresses,
            }
        ],
    };

    const onTitleClick = (index) => {
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    };

    const [selectedProject, setSelectedProject] = useState(null);

    const onProjectSelect = (key) => {
        setSelectedProject(key);
    };

    if (projects_ != null && Object.keys(projects_).length > 1) {

        const keys = Object.keys(projects_);

        const renderedItems = keys.map((key) => {
            if (key !== "id") {
                //const active = index === activeIndex ? 'active' : '';

                return (
                    <ProjectItem
                        idx={key}
                        onProjectSelect={() => onProjectSelect(key)}
                        project={projects_[key]}
                    />
                );
            }
        });
        {/*
                    <div key={project.projectName}>
                        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                            <i className="dropdown icon"></i>
                            {project.projectName}
                        </div>
                        <div className={`content ${active}`}>
                            <p>
                                <label>Assignee(s): </label>{project.projectAssignee}
                            </p>
                            <p>
                                <label>Project Milestones: </label>{project.projectMilestones}
                            </p>
                            <p>
                                <label>Project Start Date: </label>{project.start}
                            </p>
                            <p>
                                <label>Project End Date: </label>{project.end}
                            </p>
                        </div>
                    </div >
                );
            }
        });
    */}

        return (
            <div>
                <h3>List of Projects</h3>

                {renderedItems}

                <br />
                <ProjectDetail idx={selectedProject}/>
                <br />
                <div>
                    <button class="ui button" onClick={exportPDF}>
                        Generate Report
                </button>
                </div>
                <br />
                <div>
                    <Bar
                        data={state}
                        options={
                            {
                                title: {
                                    display: true,
                                    text: 'Projects Summary',
                                    fontSize: 20,
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        }
                                    }]
                                }
                            }}
                    />
                </div>
            </div>
        )
    }
    return <div>No Project Created....</div>
};

export default ProjectList;