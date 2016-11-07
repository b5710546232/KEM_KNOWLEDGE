import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/cart'


describe('Cart Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = []
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load cart list', () => {
    it('should load all cart list if the request is sucess', () => {
      const action = {
        type: 'LOAD_CART_LIST_SUCCESS',
        payload:[
          {
            "id": 24,
            "product": 1,
            "user": 2,
            "order": null,
            "quantity": 1,
            "is_active": true
          }
        ]
      }
      const expectedState = [
        {
          "id": 24,
          "product": 1,
          "user": 2,
          "order": null,
          "quantity": 1,
          "is_active": true
        }
      ]

      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
})
