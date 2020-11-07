import React from 'react';

const DefectItem = ({ idx, defect, onDefectSelect }) => {
    return (
        <div onClick={() => onDefectSelect(idx)} className="item">
            <div className="content">
                <div class="header">
                    <label style={{ cursor: "pointer" }}>Defect Title: </label>
                    {defect.title}
                </div>
                <div class="description">
                    <div>
                        <label style={{ cursor: "pointer" }}>Assigned to: </label>
                        {defect.assignee}
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>Defect Summary: </label>
                        {defect.summary}
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>Steps: </label>
                        {defect.steps}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefectItem;