import { ADD_VACATION_REQUEST } from "./action.js";
import { SELECT_VACATION_DATE } from "./action.js";

const initialState = {
  vacation: {
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

export const vacationReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_VACATION_REQUEST:
        return {
          ...state,
          vacation: { ...state.vacation,
           [action.payload.id]: {
            name: action.payload.employeeName,
            start: action.payload.startDate,
            end: action.payload.endDate
           } 
          }
        }

      case SELECT_VACATION_DATE:
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
