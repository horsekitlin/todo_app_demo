import constants from 'flux-constants';

export const syncActionTypes = [
  'START_FETCHING',
  'STOP_FETCHING',
  'SIGN_OUT',
  'SEND_MESSAGE',
];

export const basicAsyncActionTypes = [
  'THIRD_PARTY_SIGN_IN',
  'SIGN_IN',
  'SIGN_UP',
  'GET_TASKS',
  'ADD_TASK',
  'UPDATE_TASK',
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