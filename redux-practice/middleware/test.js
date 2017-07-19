// require('./style.css')

// let name = 'deryck'


// console.log(name)

import redux, { createStore, applyMiddleware } from './node_modules/redux/src/'
import thunk from './node_modules/redux-thunk/src/index.js'
import logger from './node_modules/redux-logger/src/index.js'

const reducer = (state = {}, action) => {
  return state
}

const store = createStore(reducer, applyMiddleware(logger, thunk))


store.dispatch(dispatch => {
  return {}
})


