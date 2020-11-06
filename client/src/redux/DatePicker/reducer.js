import {SELECT_DATE} from "./action.js"

const initialState = {
    date: new Date(),
}


export const datePickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DATE:
            return {date: action.date};

        default:
            return state;
    }
}