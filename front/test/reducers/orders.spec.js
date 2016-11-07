import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/orders'


describe('Order Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = []
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load order list', () => {
   it('should load all order list if the request is sucess', () => {
     const action = {
         type: 'LOAD_ORDER_LIST_SUCCESS',
         payload:[
           {
             "id": 31,
             "method": 1,
             "address": 5,
             "create_date": "2016-10-28",
             "last_update_date": null,
             "transfer_slip": "",
             "is_paid": false,
             "is_shipped": false,
             "user": 2,
             "is_active": true,
             "postal_track": null,
             "status": "Wait for slip"
           },
           {
             "id": 32,
             "method": 1,
             "address": 5,
             "create_date": "2016-10-28",
             "last_update_date": null,
             "transfer_slip": "",
             "is_paid": false,
             "is_shipped": false,
             "user": 2,
             "is_active": true,
             "postal_track": null,
             "status": "Wait for slip"
           }
         ]
       }
     const expectedState = [
       {
         "id": 31,
         "method": 1,
         "address": 5,
         "create_date": "2016-10-28",
         "last_update_date": null,
         "transfer_slip": "",
         "is_paid": false,
         "is_shipped": false,
         "user": 2,
         "is_active": true,
         "postal_track": null,
         "status": "Wait for slip"
       },
       {
         "id": 32,
         "method": 1,
         "address": 5,
         "create_date": "2016-10-28",
         "last_update_date": null,
         "transfer_slip": "",
         "is_paid": false,
         "is_shipped": false,
         "user": 2,
         "is_active": true,
         "postal_track": null,
         "status": "Wait for slip"
       }
     ]

     const nextState = reducer(currentState, action)
     reducer(currentState, action)
     expect(nextState).to.deep.equal(expectedState)
   })
 })
})
