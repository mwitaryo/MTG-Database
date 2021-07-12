import { combineReducers } from 'redux'
import favouriteReducer from './favourite'
import cardReducer from './card'


export default combineReducers({ favouriteReducer, cardReducer })