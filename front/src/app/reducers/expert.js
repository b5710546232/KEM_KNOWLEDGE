import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const expert = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_EXPERT_RICE_LIST_SUCCESS':
      let data = action.payload.reduceRight(function (r, a) {
          r.some(function (b) { return a.Rice === b.Rice; }) || r.push(a);
          return r;
      }, []);
      return data
    default:
      return state
  }
}
export default expert
