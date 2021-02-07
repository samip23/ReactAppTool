import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ProjectItem from "./ProjectItem";
import ProjectDetail from "./ProjectDetail.js";
import { Bar } from "react-chartjs-2";
import { scenarioEnabled } from "../../redux/ScenarioEnabler";

const ProjectList = () => {
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Projects Report";
    const headers = [
      ["Project", "Analyst(s)", "Project Milestones", "Start Date", "End Date"],
    ];
    const data = project_data.map((elt) => [
      elt.projectName,
      elt.projectAssignee,
      elt.projectMilestones,
      elt.start,
      elt.end,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("project_report.pdf");
  };

  const dispatch = useDispatch();
  const projects_ = useSelector((state) => state.project.project);
  // console.log("projects_", projects_)
  const project_data = Object.values(projects_).slice(1);

  const scenarios_ = useSelector((state) => state.scenario);
  const scenarios_data = Object.values(scenarios_).slice(1);

  console.log(scenarios_data);
  const projectNames = project_data.map((project) => project.projectName);
  const projectProgresses = project_data.map((project) => project.progressV);
  console.log(projectProgresses);

  const countScenarioArr = scenarios_data.map((project) => {
    const arr = Object.values(project);
    const count_arr = arr.map((x) => {
      return x.result;
    });
    let pCount = 0;
    let fCount = 0;
    let bCount = 0;
    count_arr.map((x) => {
      if (x == "p") pCount++;
      if (x == "f") fCount++;
      if (x == "b") bCount++;
    });
    return [pCount, fCount, bCount];
  });

  // const scenarioProgresses = countScenarioArr.map((x) => []);
  // console.log(scenarioProgresses);

  let scenario_state;

  const projectKeys = Object.keys(projects_).slice(1);
  const scenarioKeys = Object.keys(scenarios_).slice(1);

  const pCountArr = [];
  const fCountArr = [];
  const bCountArr = [];

  countScenarioArr.map((x) => {
    pCountArr.push(x[0]);
    fCountArr.push(x[1]);
    bCountArr.push(x[2]);
  });

  console.log(pCountArr, fCountArr, bCountArr);

  if (scenarios_data[0] !== undefined) {
    scenario_state = {
      labels: projectNames,
      datasets: [
        {
          label: "Pass",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: pCountArr,
          maxBarThickness: 50,
        },
        {
          label: "Fail",
          backgroundColor: "rgba(255,0,0,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: fCountArr,
          maxBarThickness: 50,
        },
        {
          label: "Blocked",
          backgroundColor: "rgba(120,120,120,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: bCountArr,
          maxBarThickness: 50,
        },
      ],
    };
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const project_state = {
    labels: projectNames,
    datasets: [
      {
        label: "Progress",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: projectProgresses,
        maxBarThickness: 50,
      },
    ],
  };

  const onTitleClick = (index) => {
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const [selectedProject, setSelectedProject] = useState(null);

  const onProjectSelect = (key) => {
    setSelectedProject(key);
    dispatch(scenarioEnabled(false));
  };

  if (projects_ != null && Object.keys(projects_).length > 1) {
    const keys = Object.keys(projects_);

    const renderedItems = keys.map((key) => {
      if (key !== "id") {
        //const active = index === activeIndex ? 'active' : '';

        return (
          <ProjectItem
            idx={key}
            onProjectSelect={() => onProjectSelect(key)}
            project={projects_[key]}
          />
        );
      }
    });
    {
      /*
                    <div key={project.projectName}>
                        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                            <i className="dropdown icon"></i>
                            {project.projectName}
                        </div>
                        <div className={`content ${active}`}>
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
                    </div >
                );
            }
        });
    */
    }

    return (
      <div>
        <h3>List of Projects</h3>

        {renderedItems}

        <br />
        <div>
          <button class="ui button" onClick={exportPDF}>
            Generate Project Report
          </button>
        </div>
        <br />
        <ProjectDetail idx={selectedProject} />
        <br />
        <div>
          <Bar
            data={project_state}
            options={{
              title: {
                display: true,
                text: "Projects Summary",
                fontSize: 20,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div>
          <Bar
            className="graph-scenarios"
            data={scenario_state}
            options={{
              title: {
                display: true,
                text: "Test Scenarios Summary",
                fontSize: 20,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      precision: 0,
                    },
                    stacked: true,
                    // scaleLabel: {
                    //   labelString: "test",
                    //   display: true,
                    // },
                  },
                ],

                xAxes: [
                  {
                    stacked: true,
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
  return <div>No Project Created....</div>;
};

export default ProjectList;
