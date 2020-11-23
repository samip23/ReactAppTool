import { ADD_PROJECT } from "./action.js";
import { SELECT_PROJECT_DATE } from "./action.js";
import { SET_PROGRESS } from "./action.js";

const initialState = {
    project: {
    id:  {
      projectName: "",
      projectAssignee: "",
      projectMilestones: "",
      start: new Date(),
      end: new Date(),
      progressV: 0,
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
            end: action.payload.endDate,
            progressV: 0,
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

        case SET_PROGRESS:
      return {
        ...state,
        project: {
          ...state.project,
          [action.payload.id]: {
            ...state.project[action.payload.id],
            progressV: action.payload.progressV,
          }
        }
      }

    default:
      return state;
  }
};
