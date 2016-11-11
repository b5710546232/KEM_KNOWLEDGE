import { CALL_API } from 'redux-api-middleware';
import { WEATHER_API } from '../constants/endpoints';

export const loadWeatherFromCoordinates = (lat,lon) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: WEATHER_API+'weather?lat='+lat+'&lon='+lon+'&appid=2f1fa5873ba60131717188405d5d8cd9',
        headers: {
          'Accept': 'application/json',
        },
        method: 'GET',
        types: [
          'LOAD_WEATHER_REQUEST',
          {
            type: 'LOAD_WETHER_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'LOAD_WETHER_FAILURE'
        ]
      }
    }
  )
)
