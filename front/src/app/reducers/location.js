import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {}

const location = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_LOCATION_SUCCESS':
      return Object.assign({}, state, {
        sub_district:action.payload.results[1].address_components[0].long_name,
        district:action.payload.results[1].address_components[1].long_name,
        province:action.payload.results[1].address_components[2].long_name,
        lat:action.payload.lat,
        lng:action.payload.lng
      })
    default:
      return state
  }
}
export default location
