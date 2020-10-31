const ADD_TASK = "ADD_TASK";

export const addTask = (taskName, taskAssignee, taskPriority, date) => (
    {
        type: ADD_TASK,
        payload: {
            taskName,
            taskAssignee,
            taskPriority,
            date
        }
    }
)

