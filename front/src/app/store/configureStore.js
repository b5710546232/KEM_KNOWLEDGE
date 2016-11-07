import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { apiMiddleware } from 'redux-api-middleware'
const loggerMiddleware = createLogger()

export default (history, preloadedState) => {

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware, apiMiddleware,routerMiddleware(history)]

if(process.env.NODE_ENV !== 'production'){
  console.log('dev');
  middlewares.push(createLogger())
  console.log('hi',process.env.NODE_ENV);
}

const store = createStore(rootReducer, preloadedState, composeEnhancers(
  applyMiddleware(...middlewares)
))

if (module.hot) {
module.hot.accept('../reducers', () => {
  const nextReducer = require('../reducers').default

  store.replaceReducer(nextReducer)
})
}
return store
}
