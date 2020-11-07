import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addDefect } from "../../redux/Defect";
import { Segment } from 'semantic-ui-react'
import "./DefectForm.scss";
import uniqid from "uniqid";

const DefectForm = () => {
    const dispatch = useDispatch();

    const [newDefect, setNewDefect] = useState({
        title: "",
        summary: "",
        status: "Assigned",
        assignee: "",
        expectedResults: "",
        actualResults: "",
        steps: "",
        comments: "",
        eta: "",
        severity: "Blocker",
        priority: "P1",
        dateCreated: "",
        dateResolved: "",
    });


    const { title, summary, status, expectedResults, actualResults, steps, comments, eta, assignee, severity, priority } = newDefect;

    // useEffect(() => {
    //     console.log(title,summary,status, priority)
    // },[title,summary,status,priority])

    const defects = useSelector(state => state.defect.defects);


    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNewDefect({ ...newDefect, [name]: value });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (title !== "" && summary !== "" && expectedResults !== "") {
            //generate uniqid and insert it as first param
            const id = uniqid();
            dispatch(addDefect(id, title, summary, expectedResults, actualResults, steps, status, assignee, priority, severity));
            document.getElementById("defect-form").submit();
        } else {
            alert("Make sure all fields have been entered");
        }
    };

    return (
        <div>
            <form id="defect-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Title:</label>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Summary:</label>
                    <textarea
                        name="summary"
                        value={summary}
                        onChange={onInputChange}
                    />
                </div>
                <Segment.Group horizontal>
                    <Segment>

                        <div className="field">
                            <label>Expected Results:</label>
                            <textarea
                                name="expectedResults"
                                value={expectedResults}
                                onChange={onInputChange}
                            />
                        </div>
                    </Segment>
                    <Segment>
                        <div className="field">
                            <label>Actual Results:</label>
                            <textarea
                                name="actualResults"
                                value={actualResults}
                                onChange={onInputChange}
                            />
                        </div>
                    </Segment>
                </Segment.Group>
                <div className="field">
                    <label>Steps to Reproduce:</label>
                    <textarea
                        className="steps"
                        name="steps"
                        value={steps}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Status:</label>
                    <select
                        //value={status} 
                        name="status"
                        onChange={onInputChange}>
                        <option value="Assigned">Assigned</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Blocked">Blocked</option>
                        <option value="Hold">Hold</option>
                        <option value="Reopen">Reopen</option>
                        <option value="Ready for UAT">Ready for UAT</option>
                        <option value="Ready for DVT">Ready for DVT</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <div className="field">
                    <label>Assigned To:</label>
                    <input
                        name="assignee"
                        type="text"
                        value={assignee}
                        onChange={onInputChange}
                    />
                </div>
                <Segment.Group horizontal>
                    <Segment>
                        <div className="field">
                            <label>Priority:</label>
                            <select value={priority} name="priority" onChange={onInputChange}>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                                <option value="P3">P3</option>
                                <option value="P4">P4</option>
                            </select>
                        </div>
                    </Segment>
                    <Segment>
                        <div className="field">
                            <label>Severity:</label>
                            <select value={severity} name="severity" onChange={onInputChange}>
                                <option value="Blocker">Blocker</option>
                                <option value="Major">Major</option>
                                <option value="Medium">Medium</option>
                                <option value="Minor">Minor</option>
                            </select>
                        </div>
                    </Segment>
                </Segment.Group>
                <div className="defect-form-btn">
                    <button class="ui button" type="submit" onClick={onFormSubmit}>
                        Submit
                        </button>
                </div>
            </form>
        </div>
    )
};

export default DefectForm;