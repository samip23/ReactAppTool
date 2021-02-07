import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DatePickerApp from "../Utlities/DatePickerApp";
import './VacationForm.scss';
import { addVacationRequest } from "../../redux/VacationForm/action.js";
import uniqid from "uniqid";

const VacationForm = () => {

    const [newVacation, setNewVacation] = useState({
        employeeName: "",
        startDate_: new Date(),
        endDate_: new Date(),
        id: "",
    });

    const [vacations, setVacations] = useState([]);
    const { employeeName, startDate_, endDate_, id} = newVacation;
    const dispatch = useDispatch();

    //const tasks_ = useSelector((state) => state.taskform.task);
    const vacations_ = useSelector((state) => state.vacation.employee);
    const date_ = useSelector(state => state.vacation.date);
    const {start, end} = date_;
    useEffect(() => {
        setVacations(vacations_);
        //setNewTask({...newTask, startDate, endDate})
    }, [vacations_, start, end]);

    const onInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "employeeName") {
            setNewVacation({ employeeName: value });
        }

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (employeeName !== "") {
            const id = uniqid();
            setNewVacation({ ...newVacation, id });
            dispatch(addVacationRequest(employeeName, start,end,id));
            document.getElementById("vacation-form").submit();
        } else {
            alert("Make sure all fields have been entered");
        }
    };

    return (
        <div>
            <form id="vacation-form" className="ui form" /* onSubmit={onFormSubmit} */>
                <div className="field">
                    <label>Employee Name:</label>
                    <input
                        name="employeeName"
                        type="text"
                        value={employeeName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="field">
                    <label>Start Date:</label>
                    <DatePickerApp type={{mode: "vacation", id, key: 1}}/>
                </div>
                <div className="field">
                    <label>End Date:</label>
                    <DatePickerApp type={{mode: "vacation", key: 2, id}}/>
                </div>
                <div className="vacation-form-btn">
                    <button class="ui button" type="submit" onClick={onFormSubmit} >
                        Add to Vacation Calendar
                        </button>
                </div>
            </form>
        </div>
    )
};

export default VacationForm;