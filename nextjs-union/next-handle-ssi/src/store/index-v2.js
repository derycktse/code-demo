import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';



const rootReducers = combineReducers({})
const middlewares = [];
const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default (initialState) => createStoreWithMiddleware(rootReducers, initialState, enhancers);
