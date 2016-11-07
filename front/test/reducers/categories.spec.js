import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/categories'


describe('Categories Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = []
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load categories list', () => {
    it('should load all categories list if the request is sucess', () => {
      const action = {
        type: 'LOAD_CATEGORY_LIST_SUCCESS',
        payload:[
          {
            "id": 3,
            "name": "cat3",
            "description": "cat3-des",
            "is_active": true
          },
          {
            "id": 1,
            "name": "cat01",
            "description": "cat_des",
            "is_active": true
          },
          {
            "id": 2,
            "name": "cat02นะอิอิ",
            "description": "cat02_des",
            "is_active": true
          }
        ]
      }
      const expectedState = [
        {
          "id": 3,
          "name": "cat3",
          "description": "cat3-des",
          "is_active": true
        },
        {
          "id": 1,
          "name": "cat01",
          "description": "cat_des",
          "is_active": true
        },
        {
          "id": 2,
          "name": "cat02นะอิอิ",
          "description": "cat02_des",
          "is_active": true
        }
      ]

      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
})
