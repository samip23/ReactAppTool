const INVOKE = "INVOKE";

export const scenarioEnabled = (flag) => ({
    type: INVOKE,
    flag
})

const initialState = {
    scenarioEnabled: false
}

export const scenarioEnabledReducer = (state=initialState, action) => {
    switch (action.type) {
        case INVOKE:
            return {scenarioEnabled: action.flag}
        default:
            return state;
    }
}