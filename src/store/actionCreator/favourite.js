import { SET_FAVOURITE } from '../actionType'

export function setFavourite(input) {
  return { type: SET_FAVOURITE, payload: input }
}