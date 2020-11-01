import { ADD_TASK } from "./action.js";

const initialState = {
  task: [
    {
      taskName: "",
      taskAssignee: "",
      taskPriority: "",
      date: "",
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [
          ...state.task,
          {
            taskName: action.payload.taskName,
            taskAssignee: action.payload.taskAssignee,
            taskPriority: action.payload.taskPriority,
            date: action.payload.date,
          },
        ],
      };
    default:
      return state;
  }
};
