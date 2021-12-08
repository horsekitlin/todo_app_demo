import initialState from "./initialState";
import types from "constants/actionTypes";
import cloneDeep from "lodash/cloneDeep";

const updateTaskSuccess = (task, payload) => {
  const index = task.list.findIndex((task) => task.id === payload.id);
  const nextTaskList = cloneDeep(task.list);
  nextTaskList[index] = payload;
  return { ...task, list: nextTaskList };
};
export default function routeReducer(
  task = initialState.task,
  { type, payload }
) {
  switch (type) {
    case types.UPDATE_TASK_SUCCESS:
      return updateTaskSuccess(task, payload);
    case types.ADD_TASK_SUCCESS:
      return { ...task, list: [payload, ...task.list] };
    case types.GET_TASKS_SUCCESS:
      return { ...task, list: payload };
    case types.GET_TASKS:
    case types.GET_TASKS_ERROR:
    case types.ADD_TASK:
    case types.ADD_TASK_ERROR:
    case types.UPDATE_TASK:
    case types.UPDATE_TASK_ERROR:
    default:
      return task;
  }
}
