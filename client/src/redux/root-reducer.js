import { combineReducers } from "redux";
import { datePickerReducer } from "./DatePicker/reducer";
import { taskReducer } from "./TaskForm/reducer";
import { ganttReducer } from "./GanttForm/reducer";
import { vacationReducer } from "./VacationForm/reducer";
import { defectReducer } from "./Defect";
import { projectReducer } from "./ProjectApp/reducer";
import { scenarioReducer } from "./Scenario/reducer";
import { scenarioEnabledReducer} from "./ScenarioEnabler"

const rootReducer = combineReducers({
  datepicker: datePickerReducer,
  taskform: taskReducer,
  gantt: ganttReducer,
  vacation: vacationReducer,
  defect: defectReducer,
  project: projectReducer,
  scenario: scenarioReducer,
  scenarioEnabler: scenarioEnabledReducer
});

export default rootReducer;
