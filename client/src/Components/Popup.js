import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Popup.scss';
import { addScenario } from "../redux/Scenario/action.js";
import uniqid from "uniqid";

const Popup = ({projectName, projectId, closePopup}) => {
    console.log("POPUP", projectId)

    const [newScenario, setNewScenario] = useState({
        project: "",
        description: "",
        highLevelSteps: "",
        validation: "",
        language: "English",
        // key: "",
        result: "",
    });

    const [scenarios, setScenarios] = useState([]);
    const { project, description, highLevelSteps, validation, language } = newScenario;
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(false);

    const scenarios_ = useSelector((state) => state.scenario);

    useEffect(() => {
        setScenarios(scenarios_);
    }, [scenarios_]);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNewScenario({ ...newScenario, [name]: value });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("scenarios",newScenario)
        if (description !== "" && highLevelSteps !== "" && validation !== "") {
            const key = "key-" + uniqid();
            console.log("genereated key", key)
            setNewScenario({ ...newScenario, projectId });
            dispatch(addScenario(projectName, description, highLevelSteps, validation, language, projectId, key));
            document.getElementById("scenarios-form").submit();
        } else {
            alert("Make sure all fields have been entered");
        }
    };

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>Create Scenario for {projectName}</h1>
                <button className="close-btn" onClick={closePopup}>close me</button>
                <form id="scenarios-form" className="ui form" /* onSubmit={onFormSubmit} */>
                    <div className="field">
                        <label>Description:</label>
                        <textarea className="text-area-popup"
                            name="description"
                            type="text"
                            value={description}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="field">
                        <label>High Level Steps:</label>
                        <textarea
                        className="text-area-popup"

                            name="highLevelSteps"
                            type="text"
                            value={highLevelSteps}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="field">
                        <label>Validation:</label>
                        <textarea
className="text-area-popup"
                            name="validation"
                            type="text"
                            value={validation}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="field">
                        <label>Language:</label>
                        <select name="language" onChange={onInputChange}>
                            <option selected value="English">English</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div className="scenarios-form-btn">
                        <button onClick={onFormSubmit} class="ui button" type="submit">
                            Create
          </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Popup;