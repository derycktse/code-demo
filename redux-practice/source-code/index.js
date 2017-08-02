
// import redux from './node_modules/redux/src'
import { createStore, applyMiddleware, combineReducers } from './node_modules/redux/es/index'
import thunk from 'redux-thunk/es/index'
import logger from 'redux-logger/src/index'


const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FIRE1':
      return {
        reducer1: 'dante1'
      }
    case 'FIRE2':
      return {
        reducer1: 'lindsey'
      }
  }
  return state
}

const reduces = combineReducers({ reducer1: reducer })

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(reducer, middlewares)
store.dispatch(dispatch => {
  return {
    type : 'SOMETHING_HAPPEN'
  }
})
// const store = createStore(reduces, { reducer1: 'deryck' })

let state = store.getState()


store.subscribe(() => {
  console.log('fire')
})

store.dispatch({
  type: 'FIRE1'
})
store.dispatch({
  type: 'FIRE2'
})