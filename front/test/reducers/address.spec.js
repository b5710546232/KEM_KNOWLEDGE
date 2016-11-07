import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/address'


describe('Address Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = [

    ]
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load address list', () => {
    it('should load all address list if the request is sucess', () => {
      const action = {
        type: 'LOAD_ADDRESS_LIST_SUCCESS',
        payload:[
          {
            "id": 5,
            "address_number": "asd",
            "village": "sad",
            "road": "s",
            "sub_distinct": "f",
            "distinct": "f",
            "province": "f",
            "country": "f",
            "zipcode": "21",
            "is_active": true
          }
        ]
      }
      const expectedState = [
        {
          "id": 5,
          "address_number": "asd",
          "village": "sad",
          "road": "s",
          "sub_distinct": "f",
          "distinct": "f",
          "province": "f",
          "country": "f",
          "zipcode": "21",
          "is_active": true
        }
      ]

      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })

  })

  describe('Create new address', () => {
    it('should create address and add in the address list if the request is sucess', () => {
      const action = {
        type: 'CREATE_ADDRESS_SUCCESS',
        payload:{
          "id": 7,
          "address_number": "1150",
          "village": "vil",
          "road": "r01",
          "sub_distinct": "sub",
          "distinct": "dis",
          "province": "pro",
          "country": "thai",
          "zipcode": "101",
          "is_active": true}
        }
      const expectedState = [
        {
          "id": 7,
          "address_number": "1150",
          "village": "vil",
          "road": "r01",
          "sub_distinct": "sub",
          "distinct": "dis",
          "province": "pro",
          "country": "thai",
          "zipcode": "101",
          "is_active": true
        }
      ]

      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })

  })
})
