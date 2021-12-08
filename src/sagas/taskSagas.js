import types from 'constants/actionTypes';
import {
  addTaskResult,
} from 'apis/task';
import fetchAPIResult from 'utils/sagaUtils';

export function* addTaskSaga({payload: {onSuccess, ...payload}}) {
  return yield fetchAPIResult({
    payload,
    onSuccess,
    apiResult: addTaskResult,
    action: types.ADD_TASK,
    successMessage: '新增任務成功',
  });
}
