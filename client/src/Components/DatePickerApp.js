import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { selectDate } from "../redux/DatePicker/action.js"
import {useSelector, useDispatch} from "react-redux";


import "react-datepicker/dist/react-datepicker.css";


const DatePickerApp = () => {
  
  const dispatch = useDispatch();
  const date = useSelector(state => state.date);

  //console.log(date);
  useEffect(() => {
    //setStartDate(date)
  }, [date])

  const handleSelect = (date) => {
    // dispatch action to change date
    //console.log('handleSelect', date)
    dispatch({type: "SELECT_DATE", date})
  }
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate}
      onSelect={handleSelect}
      />
  );
};

export default DatePickerApp;