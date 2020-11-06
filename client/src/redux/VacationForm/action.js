export const ADD_VACATION_REQUEST = "ADD_VACATION_REQUEST";
export const SELECT_VACATION_DATE = "SELECT_VACATION_DATE"

export const addVacationRequest = (employeeName, startDate, endDate, id) => ({
  type: ADD_VACATION_REQUEST,
  payload: {
    employeeName,
    startDate,
    endDate,
    id
  },
});

export const selectVacationDate = (date, key) => ({
  type: SELECT_VACATION_DATE,
  payload: {
    date, key
  }
})