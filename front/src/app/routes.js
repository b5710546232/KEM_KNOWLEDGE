import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {
  App,
  Home,
  Expert,
} from './components'

export default (store,history) => {
  return (
     <Router history={syncHistoryWithStore(history, store)}>
      <Router path='/' component={App}>
        <IndexRoute component={Home}/>
        <route path='/expert'>
          <IndexRoute component={Expert} />
        </route>
      </Router>
    </Router>
  )
}
