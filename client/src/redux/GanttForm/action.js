export const ADD_GANTT_TASK = "ADD_GANTT_TASK";
export const SELECT_GANTT_DATE = "SELECT_GANTT_DATE"

export const addGanttTask = (taskName, startDate, endDate, id) => ({
  type: ADD_GANTT_TASK,
  payload: {
    taskName,
    startDate,
    endDate,
    id
  },
});

export const selectGanttDate = (date, key) => ({
  type: SELECT_GANTT_DATE,
  payload: {
    date, key
  }
})