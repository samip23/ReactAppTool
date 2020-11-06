import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import GanttChart from '../Components/GanttApp/GanttChart';
import TextField from '@material-ui/core/TextField';
import "react-datepicker/dist/react-datepicker.css";

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: {
                id: '',
                start: "",
                end: "",
                stage: "",
                release: "",
            },
            scheduleTask: [
                {
                    id: '',
                    start: "",
                    end: "",
                    stage: "",
                    release: "",
                }
            ]
        };
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange = (date, event) => {
        const name = event.target.name;

        console.log(date);
        this.setState({
            formState: {
                ...this.state.formState,
                [event.target.name]: date
            }
        })
    };

    handleChange(event) {
        const { name, value } = event.target;
        //console.log(event.target.value);

        if (name === "stage") {
            this.setState({
                ...this.state.scheduleTask,
                formState: {
                    ...this.state.formState,
                    stage: value,
                },
            });
        }

        if (name === "release") {
            this.setState({
                ...this.state.scheduleTask,
                formState: {
                    ...this.state.formState,
                    release: value,
                },
            });
        }
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.formState;
        const { stage, start, end, release, id } = newItem;
        if (newItem.stage !== "") {
            const items = [...this.state.scheduleTask, newItem];
            this.setState({
                scheduleTask: items,
                formState: {
                    stage,
                    start,
                    end,
                    release,
                    id: this.state.scheduleTask[this.state.scheduleTask.length - 1].id + 1,
                },
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <form onSubmit={this.addItem}>
                        <input
                            type="text"
                            placeholder="Enter Stage"
                            name="stage"
                            value={this.state.formState.stage}
                            onChange={this.handleChange}
                        ></input>

    <DatePicker placeholderText="Start date" onChange={date => new Date()} />
 
{/* 
                       <div className="date-picker">
                        <label>Start Date:</label>
                        <TextField
                            id="datetime-local"
                            //label="Start"
                            type="datetime-local"
                            defaultValue="Start Date:"

                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleDateChange}
                            name="start"
                        />
                       </div>

                    <div className="date-picker"></div>

                    

                        <label>End Date:</label>
                        <TextField
                            id="datetime-local"
                            //label="End"
                            type="datetime-local"
                            //defaultValue="2017-05-24T10:30"

                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleDateChange}
                            name="end"
                        />
                         */}
                       
                        <input
                            type="text"
                            placeholder="Enter Release"
                            name="release"
                            value={this.state.formState.release}
                            onChange={this.handleChange}
                        ></input>
                        <button type="submit">Add</button>
                    </form>

                    <GanttChart tasksInput={this.state.scheduleTask} />
                </header>
            </div>
        );
    }
}

export default Schedule