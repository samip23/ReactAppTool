import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Segment } from 'semantic-ui-react'

const TimesheetForm = () => {

    const [newDefect, setNewDefect] = useState({
        title: "",
        summary: "",
        status: "",
        assignee: "",
        expectedResults: "",
        actualResults: "",
        steps: "",
        comments: "",
        eta: "",
        severity: "",
        priority: "",
        dateCreated: "",
        dateResolved: "",
    });

    const { title, summary, assignee, severity, priority } = newDefect;

    const onInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "title") {
            setNewDefect({ ...newDefect, title: value });
        }

        if (name === "severity") {
            setNewDefect({ ...newDefect, severity: value });
        }

    };

    return (
        <div>
            <form id="timesheet-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Day: Monday</label>
                </div>
                <div className="field">
                    <label>Project:</label>
                    <select value={severity} name="severity" onChange={onInputChange}>
                        <option value="IR">IR</option>
                        <option value="SFDC">SFDC</option>
                    </select>
                </div>
                <Segment.Group horizontal>
                    <Segment>
                        <div className="field">
                            <label>Task:</label>
                            <input
                                name="summary"
                                value={summary}
                            //onChange={onInputChange}
                            />
                        </div>
                    </Segment>
                    <Segment>
                        <div className="field">
                            <label>Percentage Worked (%):</label>
                            <input
                                name="assignee"
                                type="text"
                                value={assignee}
                            //onChange={onInputChange}
                            />
                        </div>
                    </Segment>
                </Segment.Group>
                <div className="field">
                    <label>OT:</label>
                </div>
                <div className="field">
                    <label>Project:</label>
                    <select value={severity} name="severity" onChange={onInputChange}>
                        <option value="IR">IR</option>
                        <option value="SFDC">SFDC</option>
                    </select>
                </div>
                <Segment.Group horizontal>
                    <Segment>
                        <div className="field">
                            <label>Task:</label>
                            <input
                                name="summary"
                                value={summary}
                            //onChange={onInputChange}
                            />
                        </div>
                    </Segment>
                    <Segment>
                        <div className="field">
                            <label>Hours Worked:</label>
                            <input
                                name="assignee"
                                type="text"
                                value={assignee}
                            //onChange={onInputChange}
                            />
                        </div>
                    </Segment>
                </Segment.Group>
                <div className="defect-form-btn">
                    <button class="ui button" type="submit"> {/*onClick={onFormSubmit}*/}
                        Submit
                        </button>
                </div>
            </form>
        </div >
    )
};

export default TimesheetForm;