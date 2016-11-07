import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/itemlines'


describe('Item lines Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = []
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load item lines list', () => {
   it('should load all item lines list if the request is sucess', () => {
     const action = {
         type: 'LOAD_ITEMLINE_SUCCESS',
         payload:[
           {
    "id": 1,
    "product": 2,
    "user": 1,
    "order": null,
    "quantity": 1,
    "is_active": false
  },
  {
    "id": 14,
    "product": 2,
    "user": 1,
    "order": null,
    "quantity": 55555,
    "is_active": false
  },
  {
    "id": 2,
    "product": 2,
    "user": 1,
    "order": null,
    "quantity": 1,
    "is_active": false
  }
         ]
       }
     const expectedState = [
       {
           "id": 1,
           "product": 2,
           "user": 1,
           "order": null,
           "quantity": 1,
           "is_active": false
         },
         {
           "id": 14,
           "product": 2,
           "user": 1,
           "order": null,
           "quantity": 55555,
           "is_active": false
         },
         {
           "id": 2,
           "product": 2,
           "user": 1,
           "order": null,
           "quantity": 1,
           "is_active": false
         }
     ]

     const nextState = reducer(currentState, action)
     reducer(currentState, action)
     expect(nextState).to.deep.equal(expectedState)
   })
 })
})
