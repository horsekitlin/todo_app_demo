import types from 'constants/actionTypes';
import {
  signUpResult,
  signInResult,
} from 'apis/auth';
import fetchAPIResult from 'utils/sagaUtils';

export function* signUpSaga({payload}) {
  return yield fetchAPIResult({
    apiResult: signUpResult,
    payload,
    action: types.SIGN_UP,
    successMessage: '註冊成功',
  });
}

export function* signInSaga({payload}) {
  return yield fetchAPIResult({
    apiResult: signInResult,
    payload,
    action: types.SIGN_IN,
  });
}
