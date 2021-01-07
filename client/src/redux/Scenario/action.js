export const ADD_SCENARIO = "ADD_SCENARIO";
export const DELETE_SCENARIO = "DELETE_SCENARIO";
export const SET_RESULT = "SET_RESULT";

export const addScenario = (project, description, highLevelSteps, validation, language, id, key) => ({
  type: ADD_SCENARIO,
  payload: {
    project,
    description,
    highLevelSteps,
    validation,
    language,
    id,
    key 
  },
});

export const deleteScenario = (id) => ({
  type: DELETE_SCENARIO,
  payload: {id}
});

export const setResult = (id, result, key ) => (
  {
    type: SET_RESULT,
    payload: {
      id,
      result,
      key
    }
  }
)