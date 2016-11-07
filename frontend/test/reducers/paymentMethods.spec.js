import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/paymentMethods'


describe('Payment Method Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = [
      {
        "id": 8,
        "type": "B",
        "name": "8",
        "is_active": true
      },
      {
        "id": 9,
        "type": "B",
        "name": "9",
        "is_active": true
      },
    ]
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load payment method list', () => {
   it('should load all payment method list if the request is sucess', () => {
     const action = {
         type: 'LOAD_PAYMENTMETHOD_LIST_SUCCESS',
         payload:[
           {
             "id": 8,
             "type": "B",
             "name": "8",
             "is_active": true
           },
           {
             "id": 9,
             "type": "B",
             "name": "9",
             "is_active": true
           },
           {
             "id": 3,
             "type": "B",
             "name": "safe3",
             "is_active": true
           },
         ]
       }
     const expectedState = [
       {
         "id": 8,
         "type": "B",
         "name": "8",
         "is_active": true
       },
       {
         "id": 9,
         "type": "B",
         "name": "9",
         "is_active": true
       },
       {
         "id": 3,
         "type": "B",
         "name": "safe3",
         "is_active": true
       },
     ]

     const nextState = reducer(currentState, action)
     reducer(currentState, action)
     expect(nextState).to.deep.equal(expectedState)
   })
 })
})
