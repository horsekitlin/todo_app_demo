import types from "constants/actionTypes";

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
