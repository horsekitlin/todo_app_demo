import types from 'constants/actionTypes';
import {
  getTasksResult,
  addTaskResult,
  updateTaskResult,
} from 'apis/task';
import fetchAPIResult from 'utils/sagaUtils';

export function* getTasksSaga({payload}) {
  return yield fetchAPIResult({
    payload,
    apiResult: getTasksResult,
    action: types.GET_TASKS,
  });
}

export function* addTaskSaga({payload: {onSuccess, ...payload}}) {
  return yield fetchAPIResult({
    payload,
    onSuccess,
    apiResult: addTaskResult,
    action: types.ADD_TASK,
    successMessage: '新增任務成功',
  });
}

export function* updateTaskSaga({payload }) {
  return yield fetchAPIResult({
    payload,
    apiResult: updateTaskResult,
    action: types.UPDATE_TASK,
    successMessage: '編輯任務成功',
  });
}
