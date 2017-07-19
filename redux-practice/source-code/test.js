
// import redux from './node_modules/redux/src'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const reducer = (state = {}, action) => {
  return state
}

const store = createStore(reducer, applyMiddleware(logger, thunk))

store.dispatch(dispatch => {
  return {}
})

import { mo2 } from './test2'
mo2()
debugger