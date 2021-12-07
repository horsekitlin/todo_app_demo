import types from 'constants/actionTypes';
import initialState from './initialState';

const stopFetching = (setting, payload) => {
  const nextFetchingTypes = {};
  const {fetchingTypes} = setting;
  const keys = Object.keys(fetchingTypes);
  keys.forEach(key => {
    if (key !== payload) {
      nextFetchingTypes[key] = fetchingTypes[key];
    }
  })
  return { ...setting, fetchingTypes: nextFetchingTypes };
};

const startFetching = (setting, payload) =>
  ({ ...setting, fetchingTypes: { ...setting.fetchingTypes, [payload]: 'LOADING' } });
export default function routeReducer(setting = initialState.setting, { type, payload }) {
  switch (type) {
    case types.START_FETCHING:
      return startFetching(setting, payload);
    case types.STOP_FETCHING:
      return stopFetching(setting, payload);
    default:
      return setting;
  }
}
