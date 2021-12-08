import types from "constants/actionTypes";

export const getUserAction = (payload) => ({
  type: types.GET_USER,
  payload,
});
