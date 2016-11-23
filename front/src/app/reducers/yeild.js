import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {path:'',data:[]}

const yeild = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_YEILD_LIST_SUCCESS':
      return action.payload
    default:
      return state
  }
}
export default yeild
