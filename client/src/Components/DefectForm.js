import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const DefectForm = () => {

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

    return (
        <div>
            <form id="defect-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Title:</label>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        //onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Summary:</label>
                    <input
                        name="summary"
                        type="text"
                        value={summary}
                        //onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Assigned To:</label>
                    <input
                        name="assignee"
                        type="text"
                        value={assignee}
                        //onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Priority:</label>
                    <input
                        name="priority"
                        type="text"
                        value={priority}
                    //onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Severity:</label>
                    <input
                        name="severity"
                        type="text"
                        value={severity}
                    //onChange={onInputChange}
                    />
                </div>
                <div>
                    <button class="ui button" type="submit"> {/*onClick={onFormSubmit}*/}
                        Submit
          </button>
                </div>
            </form>
        </div>
    )
};

export default DefectForm;