import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {API} from '../constants/endpoints'

export const loadRice = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: API,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'LOAD_RICE_LIST_REQUEST',
          {
            type: 'LOAD_RICE_LIST_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'LOAD_RICE_LIST_FAILURE'
        ]
      }
    }
  )
)
