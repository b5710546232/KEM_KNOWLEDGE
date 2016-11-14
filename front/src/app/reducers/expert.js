import {Action} from '../constants';
import { API } from 'redux-api-middleware'

const initialState = []

exports.expert = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_EXPERT_LOCATION_REQUEST':
      return action.payload
    default:
      return state
  }
};
