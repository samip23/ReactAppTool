import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import "./DefectDetail.scss";

const DefectDetail = ({ idx }) => {

    const defects = useSelector(state => state.defect.defects);
    const dispatch = useDispatch();

    const defect = defects[idx];

    if (!defect) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="ui segment">
                <h3>Selected Defect - More Details</h3>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Defect Title</th>
                            <th>Defect Assignee</th>
                            <th>Defect Summary</th>
                            <th>Defect Steps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Defect Title">{defect.title}</td>
                            <td data-label="Defect Assignee">{defect.assignee}</td>
                            <td data-label="Defect Summary">{defect.summary}</td>
                            <td data-label="Defect Steps">{defect.steps}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DefectDetail;