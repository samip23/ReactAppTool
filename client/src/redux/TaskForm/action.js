export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_PROGRESS = "SET_PROGRESS";

export const addTask = (taskName, taskAssignee, taskPriority, date, id) => ({
  type: ADD_TASK,
  payload: {
    taskName,
    taskAssignee,
    taskPriority,
    date,
    id
  },
});


export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {id}
});

export const setProgress = (id, progressV ) => (
  {
    type: SET_PROGRESS,
    payload: {
      id,
      progressV,
    }
  }
)
