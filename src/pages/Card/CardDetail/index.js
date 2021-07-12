import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import CardContainer from '../../../components/CardContainer'
import { fetchSelectedCard, setError, setLoading } from '../../../store/actionCreator/actionCreator'


export default function CardDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedCard = useSelector(state => state.cardReducer.selectedCard)
  const isLoading = useSelector(state => state.cardReducer.isLoading)

  useEffect(() => {
    const url = `https://api.scryfall.com/cards/${id}`
    dispatch(fetchSelectedCard(url))
  }, [])
  
  return (
    <div className="container">
      <CardContainer cardData={selectedCard} />
    </div>
  )
}