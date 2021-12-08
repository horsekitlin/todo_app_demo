import types from "constants/actionTypes";

export const getTaskAction = (payload) => ({
  type: types.GET_TASK,
  payload,
});

export const addTaskAction = (payload) => ({
  type: types.ADD_TASK,
  payload,
});

export const updateTaskAction = (payload) => ({
  type: types.UPDATE_TASK,
  payload,
});
