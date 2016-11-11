import { Action } from '../constants';
import { CALL_API } from 'redux-api-middleware';
import { GMAP_API } from '../constants/endpoints';

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
