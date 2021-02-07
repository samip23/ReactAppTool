import database from '../../Firebase/firebase';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_PROGRESS = "SET_PROGRESS";


export const addTask = (task) => ({
  type: ADD_TASK,
   payload: task
});


export const startAddTask = (taskData= {}) => {
  return (dispatch) => {
    const {
      taskName,
      taskAssignee, 
      taskPriority,
      date = new Date(),
      progressV = 0
    } = taskData;
    const task = { taskName, taskAssignee, taskPriority, date, progressV};
    console.log(taskData)
    // dispatch(addTask(taskData))

    database.ref('tasks').push(taskData)
    .then((ref) => {
      dispatch(addTask({
        // id: ref.key,
        ...task
      }))
    })
  }
}

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {id}
});

export const setProgress = (id, progressV ) => (
  {
    type: SET_PROGRESS,
    payload: {
      id,
      progressV,
    }
  }
)
