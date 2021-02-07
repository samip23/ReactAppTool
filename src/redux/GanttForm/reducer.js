import { ADD_GANTT_TASK } from "./action.js";
import { SELECT_GANTT_DATE } from "./action.js";

const initialState = {
  task: {
    "id":  {
      name: "",
      start: new Date(),
      end: new Date()
    },
  },

  date: {
    start: new Date(),
    end: new Date()
  }
};

export const ganttReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_GANTT_TASK:
        return {
          ...state,
          task: { ...state.task,
           [action.payload.id]: {
            name: action.payload.taskName,
            start: action.payload.startDate,
            end: action.payload.endDate
           } 
          }
        }

      case SELECT_GANTT_DATE:
        if (action.payload.key == 1) {
          return {
            ...state,
           date: {
             ...state.date,
            start: action.payload.date
           }
         };
        } else if (action.payload.key == 2) {
          return {
            ...state,
           date: {
             ...state.date,
            end: action.payload.date
           }
         };
        }

    default:
      return state;
  }
};
