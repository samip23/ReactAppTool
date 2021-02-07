import React, { useState, useEffect } from 'react';
import DefectDetail from "./DefectDetail";
import DefectItem from "./DefectItem";
import { useSelector, useDispatch } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Bar } from 'react-chartjs-2';
import {deleteDefect} from "../../redux/Defect";
import "./DefectList.scss";

const DefectList = () => {

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Defects Report";
        const headers = [["Title", "Summary", "Expected Results", "Actual Results", "Steps", "Status", "Assignee", "Priority", "Severity"]];
        const data = defect_data.map((elt) => [
            elt.title,
            elt.summary,
            elt.expect,
            elt.actual,
            elt.steps,
            elt.status,
            elt.assignee,
            elt.priority,
            elt.severity
        ]);

        let content = {
            startY: 50,
            head: headers,
            body: data,
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("defect_report.pdf");
    };


    const defects_ = useSelector((state) => state.defect.defects);
    const defect_data = Object.values(defects_).slice(1);
    const [selectedDefect, setSelectedDefect] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [localDefect, setLocalDefect] = useState({...defects_});

    const countBlockers = defect_data.filter(defect => defect.severity === "Blocker");
    const blockerCounted = countBlockers.length;
    const countMajors = defect_data.filter(defect => defect.severity === "Major");
    const majorCounted = countMajors.length;
    const countMediums = defect_data.filter(defect => defect.severity === "Medium");
    const mediumCounted = countMediums.length;
    const countLows = defect_data.filter(defect => defect.severity === "Low");
    const lowCounted = countLows.length;

    const dispatch = useDispatch();

    const state = {
        labels: ["Defects"],
        datasets: [
            {
                label: "Blockers",
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [blockerCounted],
            },
            {
                label: "Majors",
                backgroundColor: 'rgba(51,79,234,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [majorCounted],
            },
            {
                label: "Mediums",
                backgroundColor: 'rgba(247,191,24,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [mediumCounted],
            },
            {
                label: "Lows",
                backgroundColor: 'rgba(214,60,241,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [lowCounted],
            }
        ],
    };

    const onTitleClick = (index) => {
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    const onDefectSelect = (key) => {
        setSelectedDefect(key);
    };

    const handleDeleteDefect = (e) => {
        dispatch(deleteDefect(e.target.id));
        setLocalDefect({}) // to re-render
    }

    if (defects_ != null && Object.keys(defects_).length > 1) {
        const renderedItems = defect_data.map((defect, index) => {
            if (defect.title != "") {
                const active = index === activeIndex ? 'active' : '';

                return (
                    <div key={defect.title}>
                        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                            <div id={defect.id} className="trash-icon" onClick={(e) => {e.stopPropagation(); return handleDeleteDefect(e)}}>
                               <i id={defect.id} class="trash icon" onClick={handleDeleteDefect}></i>
                            </div>

                            <div className="task-name">

                            <i className="dropdown icon"></i>

                            {defect.title}
                            </div>


                        </div>
                        <div className={`content ${active}`}>
                            <p>
                                <label>Summary: </label>{defect.summary}
                            </p>
                            <p>
                                <label>Status: </label>{defect.status}
                            </p>
                            <p>
                                <label>Assignee: </label>{defect.assignee}
                            </p>
                            <p>
                                <label>Expected Results: </label> {defect.expect}
                            </p>
                            <p>
                                <label>Actual Results: </label> {defect.actuals}
                            </p>
                            <p>
                                <label>Steps: </label> {defect.steps}
                            </p>
                            <p>
                                <label>Severity: </label>{defect.severity}
                            </p>
                            <p>
                                <label>Priority: </label>{defect.priority}
                            </p>
                        </div>
                    </div >
                );
            }
        });


        return (
            <div>
                <h3>List of Defects</h3>
                <div className="ui styled accordion">
                    {renderedItems}

                    {/*
                <br />
                <DefectDetail idx={selectedDefect}/>
                <br />
                */}
                </div>
                <br />
                <div>
                    <button class="ui button" onClick={exportPDF}>
                        Generate Report
                </button>
                </div>
                <br />
                <div>
                    <Bar
                        data={state}
                        options={
                            {
                                title: {
                                    display: true,
                                    text: '# of Defects by Severity',
                                    fontSize: 20,
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        }
                                    }]
                                }
                            }}
                    />
                </div>
            </div>
        )
    }
    return <div>No Defect Created....</div>
};

export default DefectList;