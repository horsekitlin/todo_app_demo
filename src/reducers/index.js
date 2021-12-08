import { combineReducers } from 'redux';
import auth from './authReducer';
import task from './taskReducer';
import setting from './settingReducer';
import message from './messageReducer';

const appReducer = combineReducers({
  auth,
  task,
  setting,
  message,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
