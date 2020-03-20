import configureMockStore from 'redux-mock-store'
import { initialState } from 'redux/initialState'

const rootInitialState = {
  common: initialState
}
var store = undefined

function configureStore(state = rootInitialState) {
  if (store) return store
  const middlewares = []
  const mockStore = configureMockStore(middlewares)
  store = mockStore(state)
  return store
}

export function getStore() {
  if (!store) return configureStore(rootInitialState)
  return store
}

export default configureStore
