import { ADD_SCENARIO } from "./action.js";
import { DELETE_SCENARIO } from "./action";
import { SET_RESULT } from "./action.js";

const initialState = {
  id: {
    key: {
      project: "",
      description: "",
      highLevelSteps: "",
      validation: "",
      language: "",
      result: "",
    },
  },
};

export const scenarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCENARIO:
      if (state[action.payload.id] === undefined) {
        return {
          ...state,
          [action.payload.id]: {
            [action.payload.key]: {
              project: action.payload.project,
              description: action.payload.description,
              highLevelSteps: action.payload.highLevelSteps,
              validation: action.payload.validation,
              language: action.payload.language,
              result: "",
            },
          },
        };
      }
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.key]: {
            project: action.payload.project,
            description: action.payload.description,
            highLevelSteps: action.payload.highLevelSteps,
            validation: action.payload.validation,
            language: action.payload.language,
            result: "",
          },
        },
      };

    case DELETE_SCENARIO:
      const newScenario = { ...state };
      delete newScenario[action.payload.id];
      return newScenario;

    case SET_RESULT:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.key]: {
            ...state[action.payload.id][action.payload.key],
            result: action.payload.result,
          },
        },
      };

    default:
      return state;
  }
};
