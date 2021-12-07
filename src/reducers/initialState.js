const authState = {
  isAuth: false,
};

const settingState = {
  fetchingTypes: {}
};


const messageState = {
  msgKey: 0,
  status: '',
  text: '',
};

const initialState = {
  auth: authState,
  setting: settingState,
  message: messageState,
};

export default initialState;
