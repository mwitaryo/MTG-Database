import { SET_ERROR, SET_CARD, SET_SET, SET_LOADING, SET_SELECTED } from '../actionType'

export function setLoading(input) {
  return { type: SET_LOADING, payload: input }
}

export function setError(input) {
  return { type: SET_ERROR, payload: input }
}


export function setSelected(input) {
  return { type: SET_SELECTED, payload: input }
}


export const fetchSelectedCard = (url) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await fetch(url)
      const cardData = await response.json()
      await dispatch(setLoading(false))
      console.log(cardData, "<<< ini dard");
      dispatch(setSelected(cardData))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const setSet = (url) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await fetch(url)
      const setData = await response.json()
      await dispatch(setLoading(false))
      dispatch({
        type: SET_SET,
        payload: setData.data
      })
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const setCard = (url) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await fetch(url)
      const cardData = await response.json()
      await dispatch(setLoading(false))
      dispatch({
        type: SET_CARD,
        payload: cardData.data
      })
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

