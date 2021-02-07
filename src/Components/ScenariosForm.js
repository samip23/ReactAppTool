import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addScenario, deleteScenario } from "../redux/Scenario/action.js";
import uniqid from "uniqid";
import Popup from "./Popup";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ScenarioItem from "./ScenarioItem.js";

const ScenariosForm = ({ projectName, projectId }) => {
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Test Scenarios Report";
    const headers = [
      [
        "Project",
        "Description",
        "High Level Steps",
        "Validation",
        "Language",
        "Test Result",
      ],
    ];
    const data = scenario_arr.map((elt) => [
      elt.project,
      elt.description,
      elt.highLevelSteps,
      elt.validation,
      elt.language,
      elt.result,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("project_test_scenario_report.pdf");
  };

  const [newScenario, setNewScenario] = useState({
    project: "",
    description: "",
    highLevelSteps: "",
    validation: "",
    language: "",
    id: "",
  });

  const [scenarios, setScenarios] = useState([]);
  const {
    project,
    description,
    highLevelSteps,
    validation,
    language,
  } = newScenario;
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

  const togglePopup = () => {
    console.log(showPopup);
    setShowPopup(showPopup ? false : true);
  };

  const [selectedScenario, setSelectedScenario] = useState(null);

  const onScenarioSelect = (key) => {
    console.log("onScenarioSelect", key);
    setSelectedScenario(key);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description !== "" && highLevelSteps !== "" && validation !== "") {
      const key = uniqid();
      setNewScenario({ ...newScenario, projectId });
      dispatch(
        addScenario(
          project,
          description,
          highLevelSteps,
          validation,
          language,
          projectId,
          key
        )
      );
      document.getElementById("scenarios-form").submit();
    } else {
      alert("Make sure all fields have been entered");
    }
  };

  const [localScenario, setLocalScenario] = useState({});

  const scenario_arr = Object.values(scenarios_).slice(1);

  const handleDeleteScenario = (e) => {
    dispatch(deleteScenario(e.target.id));
    setLocalScenario({});
  };

  const scenarioToRender = scenarios_[projectId];

  if (scenarioToRender !== undefined) {
    const renderedItems = Object.entries(scenarioToRender).map((el) => {
      const [key, obj] = el;
      if (el !== "id") {
        return (
          <div class="list-items">
            <div id={el} className="trash-icon" onClick={handleDeleteScenario}>
              <i id={el} class="trash icon" onClick={handleDeleteScenario}></i>
            </div>
            <ScenarioItem
              projectId={projectId}
              scenario={obj}
              onScenarioSelect={() => onScenarioSelect(key)}
              projectKey={key}
            />
          </div>
        );
      }
    });

    return (
      <div>
        <h3>{projectName} Test Scenarios</h3>
        <div className="ui celled list">{renderedItems}</div>
        <button onClick={togglePopup}> Create Scenario</button>
        {showPopup ? (
          <Popup
            projectName={projectName}
            closePopup={togglePopup}
            projectId={projectId}
          />
        ) : null}
        <br />
        <br />
        <div>
          <button class="ui button" onClick={exportPDF}>
            Generate Test Scenarios Report
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>No Test Scenarios Created.....</h3>
      <button onClick={togglePopup}> Create Scenario</button>
      {showPopup ? (
        <Popup
          projectName={projectName}
          closePopup={togglePopup}
          projectId={projectId}
        />
      ) : null}
    </div>
  );
};
export default ScenariosForm;
