import { ADD_PROJECT } from "./action.js";
import { SELECT_PROJECT_DATE } from "./action.js";

const initialState = {
    project: {
    id:  {
      projectName: "",
      projectAssignee: "",
      projectMilestones: "",
      start: new Date(),
      end: new Date()
    },
  },

  date: {
    start: new Date(),
    end: new Date()
  }
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_PROJECT:
        return {
          ...state,
          project: { ...state.project,
           [action.payload.id]: {
            projectName: action.payload.projectName,
            projectAssignee: action.payload.projectAssignee,
            projectMilestones: action.payload.projectMilestones,
            start: action.payload.startDate,
            end: action.payload.endDate
           } 
          }
        }

      case SELECT_PROJECT_DATE:
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
