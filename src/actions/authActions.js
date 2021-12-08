import types from "constants/actionTypes";

export const resendValidationEmailAction = (payload) => ({
  type: types.RESEND_VALIDATION_EMAIL,
  payload,
});

export const thirdPartysignInAction = (payload) => ({
  type: types.THIRD_PARTY_SIGN_IN,
  payload,
});

export const signInAction = (payload) => ({
  type: types.SIGN_IN,
  payload,
});

export const signOutAction = (payload) => ({
  type: types.SIGN_OUT,
  payload,
});

export const signUpAction = (payload) => ({
  type: types.SIGN_UP,
  payload,
});
