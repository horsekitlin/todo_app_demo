import initialState from './initialState';
import types from 'constants/actionTypes';

export default function routeReducer(
  task = initialState.task,
  {type, payload},
) {
  switch (type) {
    case types.GET_TASKS_SUCCESS:
      return { ...task, list: payload };
    case types.GET_TASKS:
    case types.GET_TASKS_ERROR:
    default:
      return task;
  }
}
