const ADD_DEFECT = "ADD_DEFECT";

export const addDefect = (id, title, summary, expect = "", actual = "", steps = "", status, assignee, priority, severity) => ({
    type: ADD_DEFECT,
    payload: {
        id, title, summary, expect, actual, steps, status, assignee, priority, severity
    }

});


const initialState = {
    defects: {
        id: {
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
                        title, summary, expect, actual, steps, status, assignee, priority, severity
                    }
                }
            }

        default:
            return state;
    }
}