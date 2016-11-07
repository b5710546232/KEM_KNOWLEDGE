import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/products'


describe('Product Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = [
      {product:"p1",descrition:"des01",price:10},
      {product:"p2",descrition:"des02",price:21}
    ]
  })

  it('should return correct initial state', () => {
    const expectedState =[]

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Load product list', () => {
   it('should load all product list if the request is sucess', () => {
     const action = {
         type: 'LOAD_PRODUCT_LIST_SUCCESS',
         payload:[
           {product:"p1",descrition:"des01",price:10},
           {product:"p2",descrition:"des02",price:21},
           {product:"p3",descrition:"des04",price:32}
         ]
       }
     const expectedState = [
       {product:"p1",descrition:"des01",price:10},
       {product:"p2",descrition:"des02",price:21},
       {product:"p3",descrition:"des04",price:32}
     ]

     const nextState = reducer(currentState, action)
     reducer(currentState, action)
     expect(nextState).to.deep.equal(expectedState)
   })
 })
})
