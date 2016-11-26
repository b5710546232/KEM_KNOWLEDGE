import { Action } from '../constants';
import { CALL_API } from 'redux-api-middleware';
import { API } from '../constants/endpoints';
export const loadRice = (data,path) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: API+path,
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
                data = data.filter((item)=>item.Humidity!='none').sort((rice1,rice2)=>(rice2.Price-rice1.Price))
                if (path=='price') {
                  data = data.slice(0,1)
                }
                return {path:path,data:data}
              })
            }
          },
          'LOAD_RICE_LIST_FAILURE'
        ]
      }
    }
  )
)

export const loadYeild = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: API+"yeild",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'LOAD_YEILD_LIST_REQUEST',
          {
            type: 'LOAD_YEILD_LIST_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return {data:data}
              })
            }
          },
          'LOAD_YEILD_LIST_FAILURE'
        ]
      }
    }
  )
)
export const loadExpertRiceList = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: API+'expert',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'LOAD_EXPERT_RICE_LIST_REQUEST',
          {
            type: 'LOAD_EXPERT_RICE_LIST_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'LOAD_EXPERT_RICE_LIST_FAILURE'
        ]
      }
    }
  )
)
