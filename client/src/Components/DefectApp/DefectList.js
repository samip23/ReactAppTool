import React, { useState } from 'react';
import DefectDetail from "./DefectDetail";
import DefectItem from "./DefectItem";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
    const defect_data = Object.values(defects_);
    const [selectedDefect, setSelectedDefect] = useState(null);

    const onDefectSelect = (key) => {
        setSelectedDefect(key);
    };

    if (defects_ != null && Object.keys(defects_).length > 1) {
        
        const keys = Object.keys(defects_);

        const renderedList = keys.map((key) => {
            if (key !== "id") {
                return (
                    <div class="item">
                        <DefectItem
                            idx ={key}
                            onDefectSelect={() => onDefectSelect(key)}
                            defect={defects_[key]}
                        />

                    </div>
                );
            }
        } 
        );

        return (
            <div className="ui celled list">
                {renderedList}
                <br />
                <DefectDetail idx={selectedDefect}/>
                <br />
                <button class="ui button" onClick={exportPDF}>
                    Generate Report
                </button>
            </div>
        )
    }
    return <div>No Defect Created....</div>
};

export default DefectList;