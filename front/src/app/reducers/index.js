import { combineReducers } from 'redux'
import rices from './rices'
import location from './location'
import expert from './expert';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routerReducer,
  rices,
  location,
  expert,
});
export default rootReducer
