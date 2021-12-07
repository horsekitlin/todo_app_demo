import {put, select, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';

const okFetch = (payload, action, text, reqPayload) => {
  if (isEmpty(text)) return {
    type: `${action}_SUCCESS`,
    payload,
    reqPayload,
  };

  return {
    type: `${action}_SUCCESS`,
    payload,
    reqPayload,
    globalMessage: {
      status: 'success',
      text,
    },
  };
};

const errFetch = ({status, data}, action, errorMessage) => {
  const text = isEmpty(errorMessage)
    ? data?.data?.message ?? '非預期錯誤，請聯繫系統管理員'
    : errorMessage;

  return {
    type: `${action}_ERROR`,
    payload: {code: status, data: data.data},
    globalMessage: {
      status: 'error',
      text,
    },
  };
};

export default function* fetchAPIResult({
  apiResult,
  headers = {'Content-Type': 'application/json'},
  payload = {},
  action,
  successMessage = '',
  errorMessage = '',
  resultHandler = null,
  onSuccess= null,
  onError = null,
}) {
  try {
    const token = yield select(({auth}) => auth.token);
    const {data} = yield call(apiResult, {
      customHeaders: {Authorization: `Bearer ${token}`, ...headers},
      payload,
    });

    if (isFunction(resultHandler)) {
      return yield put(okFetch(resultHandler(data), action, successMessage, payload));
    }

    yield put(okFetch(data, action, successMessage, payload));
    if (isFunction(onSuccess)) {
      onSuccess({...data, ...payload});
    }
  } catch (error) {
    yield put(errFetch(error.response, action, errorMessage));
    if (isFunction(onError)) {
      onError(error);
    }
  }
}
