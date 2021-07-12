
import { SET_FAVOURITE } from '../actionType'

const initialState= {
  favourites: []
}

export default function favouriteReducer (state = initialState, action) {
  if (action.type === SET_FAVOURITE) {
    console.log(action.payload,"dajkfajkfjkasfjkadsjkfjk");
    return { ...state, favourites: action.payload }
  }
  return state
  

}

