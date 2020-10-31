import {ADD_TASK} from "./action.js";

const initialState = [{
    taskName: "",
    taskAssignee: "",
    taskPriority: "",
    date: "",
}];

export const taskReducer = (state = initialState, action) => {
    if (action.type==="ADD_TASK"){
        let tasks = state;
        console.log("taskreducer called")
        tasks.push(
            { 
              taskName: action.payload.taskName,
              taskAssignee: action.payload.taskAssignee,
              taskPriority: action.payload.taskPriority,
              date: action.payload.date
            }
        )
        console.log("here are tasks", tasks)
        return tasks;
    }
    return state;
}