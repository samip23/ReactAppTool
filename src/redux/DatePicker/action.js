// create action

export const SELECT_DATE = "SELECT_DATE";


// action generators

export const selectDate = (date ) => ({
    type: SELECT_DATE,
    date
})