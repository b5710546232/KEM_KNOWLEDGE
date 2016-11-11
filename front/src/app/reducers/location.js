import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {}

const location = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_LOCATION_SUCCESS':
      console.log(action.payload)
      let sub_district = ''
      let district =''
      let province = ''
      if (action.payload.results&&action.payload.results.length>=2){
        if (action.payload.results[1].address_components&&action.payload.results[1].address_components.length>=3){
          sub_district = action.payload.results[1].address_components[0].long_name
          district = action.payload.results[1].address_components[1].long_name
          province = action.payload.results[1].address_components[2].long_name
        }
      }
      return Object.assign({}, state, {
        sub_district:sub_district,
        district:district,
        province:province,
        lat:action.payload.lat,
        lng:action.payload.lng
      })
    default:
      return state
  }
}
export default location
