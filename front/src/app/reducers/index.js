import { combineReducers } from 'redux'
import rices from './rices'
import location from './location'
import weather from './weather'
import yeild from './yeild'
import loader from './loader'
import expert from './expert'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routerReducer,
  rices,
  location,
  weather,
  yeild,
  loader,
  expert
})
export default rootReducer
