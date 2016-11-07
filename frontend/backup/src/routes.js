import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  App,
  Home,
  Contact,
  Store,
  Design,
} from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='contact'>
          <IndexRoute component={Contact} />
        </route>
        <route path='store'>
          <IndexRoute component={Store} />
        </route>
        <route path='design'>
          <IndexRoute component={Design} />
        </route>
      </Router>
    </Router>
  )
}
