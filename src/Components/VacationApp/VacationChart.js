import React from "react";
import { useSelector } from "react-redux";
import TimeLine from "react-gantt-timeline";
import "./VacationChart.css";

const VacationChart = () => {

    const vacations_ = useSelector((state) => state.vacation.vacation);
    const date = useSelector(state => state.vacation.date);
    const vacations_noid = Object.values(vacations_);
    const temp = vacations_noid.map((vacation, id) => ({ ...vacation, id: id }));
    const data = temp.slice(1);

    const config = {
        taskList: {
            title: {
                label: "Employee",
                style: {
                    background: "linear-gradient( grey, black)"
                }
            },
        },
    }

const genID = () => {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-4" +
        S4().substr(0, 3) +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
    ).toLowerCase();
}
function createLink(start, end) {
    return {
        id: genID(),
        start: start.task.id,
        startPosition: start.position,
        end: end.task.id,
        endPosition: end.position
    };
}
/*     const onUpdateTask  = (item) => {
        item.start = props.start;
        item.end = props.end;
        this.setState({ data: [...this.state.data] });
    };
   const onCreateLink = item => {
        let newLink = this.createLink(item.start, item.end);
        this.setState({ links: [...this.state.links, newLink] });
    }; */


return (
    <div className="app-container">
        <h1>Vacation Chart</h1>
        {/* DayWidth<input type="range" min="30" max="500" value={this.state.daysWidth} onChange={this.handleDayWidth} step="1"/>
       Item Height<input type="range" min="30" max="500" value={this.state.itemheight} onChange={this.handleItemHeight} step="1"/> */}
        <div className="time-line-container">
            <TimeLine
                data={data}
                config={config}
            //links={this.state.links}
            //onUpdateTask={this.onUpdateTask}
            //onCreateLink={this.onCreateLink}
            />
        </div>
    </div>
);

}

export default VacationChart;