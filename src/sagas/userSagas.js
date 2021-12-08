import types from 'constants/actionTypes';
import {
  getUserResult,
} from 'apis/user';
import fetchAPIResult from 'utils/sagaUtils';

export function* getUserSaga({payload}) {
  return yield fetchAPIResult({
    payload,
    apiResult: getUserResult,
    action: types.GET_USER,
  });
}
