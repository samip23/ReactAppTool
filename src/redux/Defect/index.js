const ADD_DEFECT = "ADD_DEFECT";
const DELETE_DEFECT = "DELETE_DEFECT";

export const addDefect = (id, title, summary, expect = "", actual = "", steps = "", status, assignee, priority, severity) => ({
    type: ADD_DEFECT,
    payload: {
        id, title, summary, expect, actual, steps, status, assignee, priority, severity
    }

});

export const deleteDefect = (id) => ({
    type: DELETE_DEFECT,
    payload: {id}
})

const initialState = {
    defects: {
        id: {
            id: "",
            title: "",
            summary: "",
            expect: "",
            actual: "",
            steps: "",
            status: "",
            assignee: "",
            priority: "",
            severity: ""
        }
    }
};

export const defectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEFECT:
            const { title, summary, expect, actual, steps, status, assignee, priority, severity } = action.payload;
            return {
                ...state,
                defects: {
                    ...state.defects,
                    [action.payload.id]: {
                        id:action.payload.id, title, summary, expect, actual, steps, status, assignee, priority, severity
                    }
                }
            }

        case DELETE_DEFECT:
            const newState = {...state};
            delete newState.defects[action.payload.id];
            return newState;

        default:
            return state;
    }
}