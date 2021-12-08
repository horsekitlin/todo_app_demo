const authState = {
  isAuth: false,
  token: '',
  user: {
    id: null,
    status: null,
    createdAt: null,
    name: '',
    email: '',
  },
};

const settingState = {
  fetchingTypes: {}
};

const taskState = {
  list: [],
};

const messageState = {
  msgKey: 0,
  status: '',
  text: '',
};

const initialState = {
  auth: authState,
  task: taskState,
  setting: settingState,
  message: messageState,
};

export default initialState;
