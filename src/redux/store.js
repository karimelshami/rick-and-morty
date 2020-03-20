import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import combinedReducers from './reducer'
import rootSaga from './saga'
import { initialState } from './initialState'
const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  const { composeWithDevTools } = require('redux-devtools-extension')
  return composeWithDevTools(applyMiddleware(...middleware))
}

const store = createStore(
  combinedReducers,
  initialState,
  bindMiddleware([sagaMiddleware])
)

sagaMiddleware.run(rootSaga)

export { store }
