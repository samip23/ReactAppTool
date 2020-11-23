export const ADD_PROJECT = "ADD_PROJECT";
export const SELECT_PROJECT_DATE = "SELECT_PROJECT_DATE"
export const SET_PROGRESS = "SET_PROGRESS";

export const addProject = (projectName, projectAssignee, projectMilestones, startDate, endDate, id) => ({
  type: ADD_PROJECT,
  payload: {
    projectName,
    projectAssignee,
    projectMilestones,
    startDate,
    endDate,
    id
  },
});

export const selectProjectDate = (date, key) => ({
  type: SELECT_PROJECT_DATE,
  payload: {
    date, key
  }
})


export const setProgress = (id, progressV ) => (
  {
    type: SET_PROGRESS,
    payload: {
      id,
      progressV,
    }
  }
)