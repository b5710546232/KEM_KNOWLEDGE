import { combineReducers } from 'redux'
import rices from './rices'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routerReducer,
  rices
})
export default rootReducer
