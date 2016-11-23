import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = false

const loader = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_LOCATION_SUCCESS':
      return true
    case 'RESET_LOADER':
      return false
    default :
      return state
  }
}
export default loader
