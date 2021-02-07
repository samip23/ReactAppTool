import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { selectDate } from "../../redux/DatePicker/action.js"
import { selectGanttDate } from "../../redux/GanttForm/action"
import { selectVacationDate } from "../../redux/VacationForm/action.js"
import { selectProjectDate } from "../../redux/ProjectApp/action.js"
import {useSelector, useDispatch} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerApp = ({type}) => {

  const {mode, key, id}  = type;
  
  const dispatch = useDispatch();
  const date_datepicker = useSelector(state => state.datepicker.date);
  const date_gantt = useSelector(state => state.gantt.task);

  const [date, setDate] = useState(new Date());

  const handleSelect = (date) => {
    // dispatch action to change date
    
    setDate(date)
   
    if (mode == "task") dispatch(selectDate(date ));
    if (mode == "gantt") dispatch(selectGanttDate(date, key));
    if (mode == "vacation") dispatch(selectVacationDate(date, key));
    if (mode == "project") dispatch(selectProjectDate(date, key));
  } 


  return (
    <DatePicker selected={date}
      onSelect={handleSelect}
      />
  );
};

export default DatePickerApp;