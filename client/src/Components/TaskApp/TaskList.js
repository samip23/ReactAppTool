import React, { useState } from 'react';
import TaskDetail from "./TaskDetail";
import TaskItem from './TaskItem';
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TaskList = () => {

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Tasks Report";
        const headers = [["Name", "Task", "Priority"]];
        const data = task_data.map((elt) => [
          elt.taskAssignee,
          elt.taskName,
          elt.taskPriority,
        ]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data,
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("task_report.pdf");
      };


    const tasks_ = useSelector((state) => state.taskform.task);
    let task_data = Object.values(tasks_);
    task_data = task_data.slice(1);
    const [selectedTask, setSelectedTask] = useState(null);

    const onTaskSelect = (key) => {
        setSelectedTask(key);
    };

    if (tasks_ != null && Object.keys(tasks_).length > 1) {
        
        const keys = Object.keys(tasks_);

        const renderedList = keys.map((key) => {
            if (key !== "id") {
                return (
                    <div class="item">
                        <TaskItem
                            idx ={key}
                            onTaskSelect={() => onTaskSelect(key)}
                            task={tasks_[key]}
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
                <TaskDetail idx={selectedTask}/>
                <br />
                <button class="ui button" onClick={exportPDF}>
                    Generate Report
                </button>
            </div>
        )
    }
    return <div>No Task Created....</div>
};

export default TaskList;