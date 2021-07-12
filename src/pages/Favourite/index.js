import React from 'react'
import { useSelector } from 'react-redux'
import CardContainer from '../../components/CardContainer'

export default function Favourite() {
  const favourites = useSelector(state => state.favouriteReducer.favourites)
  console.log(favourites);

  return (
    <div className="container bg-light overflow-auto p-4">
      <ul>
        {
          favourites.map((card, i) => {
            return(
              // <li key={i}>
              //   {card.name}

              // </li>
              <CardContainer key={i} cardData={card}/>


            )

          })
        }
      </ul>

    </div>

  )
}