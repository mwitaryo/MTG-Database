import { SET_LOADING, SET_SET, SET_CARD, SET_ERROR, SET_SELECTED } from '../actionType'

const initialState = {
  error: null,
  isLoading: false,
  cards: [],
  sets: [],
  selectedCard: {}
}

export default function cardReducer(state = initialState, action) {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: action.payload }
  } else if (action.type === SET_ERROR) {
    return { ...state, error: action.payload }
  } else if (action.type === SET_SET) {
    return { ...state, sets: action.payload }
  } else if (action.type === SET_CARD) {
    return { ...state, cards: action.payload }
  }else if (action.type === SET_SELECTED) {
    return { ...state, selectedCard: action.payload }
  }
  return state
}

