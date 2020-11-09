import React, { useState } from 'react';
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
    console.log("project_data",project_data)

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    };

    if (projects_ != null && Object.keys(projects_).length > 1) {

        const renderedItems = project_data.map((project, index) => {
            if (project.projectName != "") {
                const active = index === activeIndex ? 'active' : '';

                return (
                    <div class="ui card">
                        <div class="content">
                            <div class="header">{project.projectName}</div>
                        </div>
                        <div class="content">
                            <h4 class="ui sub header">Summary</h4>
                            <div class="ui small feed">
                                <div class="event">
                                    <div class="content">
                                        <div class="summary">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div>
                    <button class="ui button" onClick={exportPDF}>
                        Generate Report
                </button>
                </div>
            </div>
        )
    }
    return <div>No Project Created....</div>
};

export default ProjectList;