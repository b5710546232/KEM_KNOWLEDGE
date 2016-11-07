import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, render, shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

chai.use(sinonChai)
chai.use(chaiEnzyme())



const reduxMount = (component, state) => {
  const mockStore = configureMockStore()
  const store = mockStore(state)

  return mount(
    <Provider store={store}>
      {component}
    </Provider>
  )
}
export {
  expect,
  sinon,
  mount,
  render,
  shallow,
  reduxMount,
}
