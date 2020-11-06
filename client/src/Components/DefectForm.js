import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./DefectForum.scss";

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
                    <select value={severity} name="severity" onChange={onInputChange}>
                        <option value="Blocker">Blocker</option>
                        <option value="Major">Major</option>
                        <option value="Medium">Medium</option>
                        <option value="Minor">Minor</option>
                    </select>
                </div>
                <div className="defect-form-btn">
                    <button class="ui button" type="submit"> {/*onClick={onFormSubmit}*/}
                        Submit
                        </button>
                </div>
            </form>
        </div>
    )
};

export default DefectForm;