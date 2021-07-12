import ReduxThunk from 'redux-thunk'

import combineReducers from './reducers'
import { applyMiddleware, createStore } from 'redux'

const middlewares = applyMiddleware(ReduxThunk)

export const store = createStore(combineReducers, middlewares)

