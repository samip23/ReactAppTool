import { combineReducers } from "redux";
import { datePickerReducer } from "./DatePicker/reducer";
import { taskReducer } from "./TaskForm/reducer";

const rootReducer = combineReducers({
  datepicker: datePickerReducer,
  taskform: taskReducer,
});

export default rootReducer;