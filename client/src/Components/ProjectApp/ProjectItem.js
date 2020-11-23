import React from 'react';

const ProjectItem = ({ idx, project, onProjectSelect }) => {
    return (
        <div onClick={() => onProjectSelect(idx)} className="item">
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
        </div>
    )
}

export default ProjectItem;