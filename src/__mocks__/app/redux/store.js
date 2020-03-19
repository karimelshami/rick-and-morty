import configureMockStore from 'redux-mock-store';
import { initialState } from 'redux/initialState';


var store = undefined;

function configureStore(state = initialState) {
  if (store) return store;
  const middlewares = [];
  const mockStore = configureMockStore(middlewares);
  store = mockStore(state);
  return store;
}

export function getStore() {
  if (!store) return configureStore(initialState);
  return store;
}

export default configureStore;
