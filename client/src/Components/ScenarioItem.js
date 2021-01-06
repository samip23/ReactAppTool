import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setResult } from "../redux/Scenario/action.js"

const ScenarioItem = ({ idx, scenario, onScenarioSelect }) => {
    
    const result_by_idx = useSelector(state => {
        if (state.scenario.scenario[idx] !== undefined) {
            return state.scenario.scenario[idx].result;
        }
        return "";
    })
    
    const [result, setResultS] = useState(result_by_idx);
    const dispatch = useDispatch();
    
    function handleResultUpdate(e) {
        setResultS(e.target.value)
    };
    
    function handleButtonClick() {
        if (result === "p" || result === "f" || result === "b") {
            dispatch(setResult(idx, result));
        }
        else alert ("Invalid value was entered")
    };
    
    return (
        <div onClick={() => onScenarioSelect(idx)} className="item">
            <div className="content">
                <div class="header">
                    <label style={{ cursor: "pointer" }}>Scenario Description: </label>
                    {scenario.description}
                </div>
                <div class="description">
                    <div>
                        <label style={{ cursor: "pointer" }}>High Level Steps: </label>
                        {scenario.highLevelSteps}
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>Validation: </label>
                        {scenario.validation}
                    </div>
                    <div>
                        <label style={{ cursor: "pointer" }}>Language: </label>
                        {scenario.language}
                    </div>
                    <div>
                        <label>Test Result: </label>
                        <input type="text" placeholder="Enter Result" value={result} onChange={handleResultUpdate} />
                        <button type="submit" onClick={handleButtonClick}>Set Result</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScenarioItem;