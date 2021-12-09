import types from "constants/actionTypes";
import {
  signUpResult,
  signInResult,
  resetPasswordResult,
  thirdPartySignInResult,
  resendValidationEmailResult,
} from "apis/auth";
import fetchAPIResult from "utils/sagaUtils";

export function* signUpSaga({ payload: { onSuccess, ...payload } }) {
  return yield fetchAPIResult({
    payload,
    onSuccess,
    apiResult: signUpResult,
    action: types.SIGN_UP,
    successMessage: "註冊成功",
  });
}

export function* signInSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: signInResult,
    payload,
    action: types.SIGN_IN,
  });
}

export function* thirdPartySignInSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: thirdPartySignInResult,
    payload,
    action: types.THIRD_PARTY_SIGN_IN,
  });
}

export function* resendValidationEmailSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: resendValidationEmailResult,
    payload,
    action: types.RESEND_VALIDATION_EMAIL,
  });
}

export function* resetPasswordSaga({ payload }) {
  return yield fetchAPIResult({
    payload,
    apiResult: resetPasswordResult,
    successMessage: "修改密碼成功",
    action: types.RESET_PASSWORD,
  });
}
