import constants from 'flux-constants';

export const syncActionTypes = [
  'START_FETCHING',
  'STOP_FETCHING',
  'SIGN_OUT',
  'SEND_MESSAGE',
];

export const basicAsyncActionTypes = [
  'RESET_PASSWORD',
  'THIRD_PARTY_SIGN_IN',
  'RESEND_VALIDATION_EMAIL',
  'SIGN_IN',
  'SIGN_UP',
  'GET_TASKS',
  'ADD_TASK',
  'UPDATE_TASK',
  'GET_USER',
];


const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`
  ];
}, []);

export default constants([...asyncActionTypes, ...syncActionTypes]);