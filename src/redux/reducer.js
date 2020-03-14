import { combineReducers } from 'redux'
import { commonReducer } from 'modules/common'

export default combineReducers({
  common: commonReducer
})
