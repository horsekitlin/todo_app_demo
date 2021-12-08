import cloneDeep from "lodash/cloneDeep";
import types from "constants/actionTypes";
import initialState from "./initialState";

export default function routeReducer(
  auth = initialState.auth,
  { type, payload }
) {
  switch (type) {
    case types.SIGN_OUT:
      return cloneDeep(initialState.auth);
    case types.TIRTHD_PARTY_SIGN_IN_SUCCESS:
    case types.THIRD_PARTY_SIGN_IN_SUCCESS:
    case types.SIGN_IN_SUCCESS:
      return { ...auth, isAuth: true, ...payload };
    case types.SIGN_IN:
    case types.SIGN_IN_ERROR:
    case types.TIRTHD_PARTY_SIGN_IN:
    case types.TIRTHD_PARTY_SIGN_IN_ERROR:
    case types.THIRD_PARTY_SIGN_IN:
    case types.THIRD_PARTY_SIGN_IN_ERROR:
    default:
      return auth;
  }
}
