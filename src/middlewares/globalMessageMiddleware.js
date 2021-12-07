import {sendMessageAction} from 'actions/globalAreaActions';
import isEmpty from 'lodash/isEmpty';

export const globalMessageMiddleware = (store) => (next) => (action) => {
  const {globalMessage} = action;

  if (!isEmpty(globalMessage)) {
    store.dispatch(sendMessageAction(globalMessage.status, globalMessage.text));
  }

  return next(action);
};
