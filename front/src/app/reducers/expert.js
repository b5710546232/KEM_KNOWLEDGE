import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  data : [],
  success : true
}

const expert = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_EXPERT_RICE_LIST_SUCCESS':
      let data = action.payload.reduceRight(function (r, a) {
          r.some(function (b) { return a.Rice === b.Rice; }) || r.push(a);
          return r;
      }, []);
      return {
        data:data,
        success: true
      }
    case 'LOAD_EXPERT_RICE_LIST_REQUEST':
      return {
        data:[],
        success: false
      }
    case 'LOAD_EXPERT_RICE_LIST_FAILURE':
      Materialize.toast('Failure!', 4000)
      return {
        data:[],
        success: true
      }
    default:
      return state
  }
}
export default expert
