import { ADD_TASK } from "./action.js";
import { DELETE_TASK } from "./action"
import { SET_PROGRESS } from "./action.js";

const initialState = {
  task: {
    "id": {
      taskName: "",
      taskAssignee: "",
      taskPriority: "",
      date: new Date(),
      progressV: 0,
    },
  },
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: {
          ...state.task,
          [action.payload.id]: {
            taskName: action.payload.taskName,
            taskAssignee: action.payload.taskAssignee,
            taskPriority: action.payload.taskPriority,
            date: action.payload.date,
            progressV: 0,
          }
        }
      }

    case DELETE_TASK:
      const newTask = {...state};
      delete newTask.task[action.payload.id];
      return newTask;

    case SET_PROGRESS:
      return {
        ...state,
        task: {
          ...state.task,
          [action.payload.id]: {
            ...state.task[action.payload.id],
            progressV: action.payload.progressV,
          }
        }
      }

    default:
      return state;
  }
};
