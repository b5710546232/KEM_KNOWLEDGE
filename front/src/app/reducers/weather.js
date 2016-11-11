import { CALL_API } from 'redux-api-middleware'

const initialState = {data:""}

const weather = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_WETHER_SUCCESS':
      return Object.assign({}, state, {
        data:action.payload,
      })
    default:
      return state
  }
}
export default weather
