import { Action } from '../constants';
import { CALL_API } from 'redux-api-middleware';
import { GMAP_API } from '../constants/endpoints';
import {loadRice} from './RiceAction'
export const loadLocation = (lat,lon) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: GMAP_API+'json?latlng='+lat+','+lon+'&key=AIzaSyAcL8ck1UsGTyczVjAMt01GQQhOusR-Q7A',
        headers: {
          'Accept': 'application/json',
        },
        method: 'GET',
        types: [
          'LOAD_LOCATION_REQUEST',
          {
            type: 'LOAD_LOCATION_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                data.lat = lat
                data.lng = lon
                let province='no'
                let district='no'
                let sub_district='no'
                if (data.results&&data.results.length>=2){
                  if (data.results[1].address_components&&data.results[1].address_components.length>=3){
                    sub_district = data.results[1].address_components[0].long_name.toLowerCase().split(" ").join("_")
                    district = data.results[1].address_components[1].long_name.toLowerCase().split(" ").slice(0,data.results[1].address_components[1].long_name.toLowerCase().split(" ").length-1).join("_")
                    province=data.results[1].address_components[2].long_name.toLowerCase().split(' ').join('')
                  }
                }
                let rice_data = {
                  district : district,
                  sub_district : sub_district,
                  province : province
                }
                dispatch(loadRice(rice_data))
                return data
              })
            }
          },
          'LOAD_LOCATION_FAILURE'
        ]
      }
    }
  )
)
