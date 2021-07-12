import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'


export default function CardContainer(props) {
  // const selectedCard = useSelector(state => state.selectedCard)
  // console.log(selectedCard, "<<<<<<< CardContainer");

  return (
    <div>
      <div className="card mb-4 card-container" style={{ maxWidth: '1200px' }}>
        <div className="row g-0">
          <div className="col-md-5 shadow-lg">
            <img src={props.cardData.image_uris?.normal} />
          </div>
          <div className="col-md-7">
            <div className="card-body-container text-center">
              <h1 className="card-title">{props.cardData.name}</h1>
            </div>

            <div className="card-body-container p-3">
              <h5 className="card-title">{props.cardData.type_line}</h5>
              <hr />
              <p className="card-text">{props.cardData.flavor_text}.</p>
              <p className="card-text">{props.cardData.oracle_text}.</p>
              <hr />
              <p className="card-text">{props.cardData.power} / {props.cardData.toughness}</p>

              <hr />
              <p className="card-text">illustrated by: {props.cardData.artist}.</p>

            </div>

            <div className="card-body-container p-3">
              <h5 className="card-title mb-2">Rarity: {props.cardData.rarity}</h5>
              
              <p className="card-text">Set Name: {props.cardData.set_name}</p>
              <hr/>
              <h6>Price:</h6>
              <table className="table border">
                <tr>
                  <th>USD</th>
                  <th>EUR</th>
                  <th>TIX</th>
                </tr>
                <tr>
                  <td>{props.cardData.prices?.usd}</td>
                  <td>{props.cardData.prices?.eur}</td>
                  <td>{props.cardData.prices?.tix}</td>
                </tr>
              </table>
            </div>
            <div>
              <div className="d-flex">
                {/* <p>{selectedCard.legalities}</p> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}