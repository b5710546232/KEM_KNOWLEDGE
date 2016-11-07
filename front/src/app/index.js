// path : /ui/index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import configureStore from './store/configureStore'
import { browserHistory } from 'react-router'
import {Provider} from 'react-redux'

const store = configureStore(browserHistory)
render(
   <Provider store={store} key='provider'>
  {routes(store, browserHistory)}
</Provider>


  , document.getElementById('app'))
