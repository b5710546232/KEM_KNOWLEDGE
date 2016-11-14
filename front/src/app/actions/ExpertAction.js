import { CALL_API } from 'redux-api-middleware';
import { API } from '../constants/endpoints';

exports.loadLocation = (data) => {
  (dispatch) => {
    dispatch({
      [CALL_API]: {
        endpoint: API + 'expert',
        headers: {
          'Accept': 'application/json',
        },
        method: 'POST',
        types: [
          'LOAD_EXPERT_LOCATION_REQUEST',
          {
            type: 'LOAD_EXPERT_LOCATION_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'LOAD_EXPERT_LOCATION_FAILURE'
        ]
      }
    })
  };
};
