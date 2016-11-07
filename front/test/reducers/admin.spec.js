// LOAD_ADMIN_METHOD_SUCCESS
import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/admin'


describe('Admin Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = {
      user : [],
      address : [],
      product : [],
      category : [],
      order : [],
      item_line : [],
      method : []
    }
  })

  it('should return correct initial state', () => {
    const expectedState = {
      user : [],
      address : [],
      product : [],
      category : [],
      order : [],
      item_line : [],
      method : []
    }

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('Admin load user', () => {
    it('should loading the user data if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_USER_SUCCESS',
        payload:
        [
          {
            "email": "safe@com.com",
            "username": "safe",
            "first_name": "safe",
            "last_name": "safe",
            "id": 1,
            "is_active": true,
            "is_staff": false
          },
          {
            "email": "s@s.com",
            "username": "aaaa",
            "first_name": "s",
            "last_name": "s",
            "id": 4,
            "is_active": true,
            "is_staff": false
          }
        ]
      }
      const expectedState = {
        user : [
          {
            "email": "safe@com.com",
            "username": "safe",
            "first_name": "safe",
            "last_name": "safe",
            "id": 1,
            "is_active": true,
            "is_staff": false
          },
          {
            "email": "s@s.com",
            "username": "aaaa",
            "first_name": "s",
            "last_name": "s",
            "id": 4,
            "is_active": true,
            "is_staff": false
          }
        ],
        address : [],
        product : [],
        category : [],
        order : [],
        item_line : [],
        method : []
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })

  describe('Admin load address', () => {
    it('should loading the address list if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_ADDRESS_SUCCESS',
        payload:
        [
          {
            "id": 1,
            "address_number": "00",
            "village": "asfe",
            "road": "asfe",
            "sub_distinct": "safe",
            "distinct": "safe",
            "province": "safe",
            "country": "safe",
            "zipcode": "123123",
            "is_active": true,
            "user": 1
          },
        ]
      }
      const expectedState = {
        user : [],
        address : [{
          "id": 1,
          "address_number": "00",
          "village": "asfe",
          "road": "asfe",
          "sub_distinct": "safe",
          "distinct": "safe",
          "province": "safe",
          "country": "safe",
          "zipcode": "123123",
          "is_active": true,
          "user": 1
        },],
        product : [],
        category : [],
        order : [],
        item_line : [],
        method : []
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
  describe('Admin load product', () => {
    it('should loading the product list if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_PRODUCT_SUCCESS',
        payload:
        [
          { "id": 2, "name": "p_name_02", "description": "p_des_02", "price": 10, "is_active": false, "category": 2, "image": "" }
        ]
      }
      const expectedState = {
        user : [],
        address : [],
        product : [
          { "id": 2, "name": "p_name_02", "description": "p_des_02", "price": 10, "is_active": false, "category": 2, "image": "" }
        ],
        category : [],
        order : [],
        item_line : [],
        method : []
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
  describe('Admin load category', () => {
    it('should loading the categories list if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_CATEGORY_SUCCESS',
        payload:
        [
          { "id": 1, "name": "cat01", "description": "cat_des", "is_active": true },
        ]
      }
      const expectedState = {
        user : [],
        address : [],
        product : [],
        category : [
          { "id": 1, "name": "cat01", "description": "cat_des", "is_active": true },
        ],
        order : [],
        item_line : [],
        method : []
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
  describe('Admin load order', () => {
    it('should loading the order list if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_ORDER_SUCCESS',
        payload:
        [
          { "id": 26, "method": 1, "address": 4, "create_date": "2016-10-28", "last_update_date": null, "transfer_slip": "", "is_paid": false, "is_shipped": false, "user": 1, "is_active": true, "postal_track": null, "status": "Wait for slip" },
        ]
      }
      const expectedState = {
        user : [],
        address : [],
        product : [],
        category : [],
        order : [ { "id": 26, "method": 1, "address": 4, "create_date": "2016-10-28", "last_update_date": null, "transfer_slip": "", "is_paid": false, "is_shipped": false, "user": 1, "is_active": true, "postal_track": null, "status": "Wait for slip" },
        ],
        item_line : [],
        method : []
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
  describe('Admin load itemline', () => {
    it('should loading the itemline list if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_ITEMLINE_SUCCESS',
        payload:
        [
          { "id": 1, "product": 2, "user": 1, "order": null, "quantity": 1, "is_active": false },
        ]
      }
      const expectedState = {
        user : [],
        address : [],
        product : [],
        category : [],
        order : [],
        item_line : [{ "id": 1, "product": 2, "user": 1, "order": null, "quantity": 1, "is_active": false },],
        method : []
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
  describe('Admin load payment method', () => {
    it('should loading the payment method list if request success', () => {
      const action = {
        type: 'LOAD_ADMIN_METHOD_SUCCESS',
        payload:
        [
          { "id": 8, "type": "B", "name": "8", "is_active": true },
        ]
      }
      const expectedState = {
        user : [],
        address : [],
        product : [],
        category : [],
        order : [],
        item_line : [],
        method : [{ "id": 8, "type": "B", "name": "8", "is_active": true },]
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)
      expect(nextState).to.deep.equal(expectedState)
    })
  })

})
