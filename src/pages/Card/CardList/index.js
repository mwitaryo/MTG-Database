import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchSelectedCard, setSelected } from '../../../store/actionCreator/actionCreator';
import { setFavourite } from '../../../store/actionCreator/favourite';


export default function CardList(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const selectedCard = useSelector(state => state.cardReducer.selectedCard)
  const [open, setOpen] = useState(false)
  const favourites = useSelector(state => state.favouriteReducer.favourites)
  const isFavourite = favourites.find(el => el.name === props.card.name)


  const onHandleFavourite = async (id) => {
    const url = `https://api.scryfall.com/cards/${id}`
    await dispatch(fetchSelectedCard(url))

    const found = favourites.find(el => el.name === selectedCard.name)
    let newFavourite
    if (!found) {
      newFavourite = [...favourites, selectedCard]
      dispatch(setFavourite(newFavourite))
    }
  }


  return (
    <div className="col-3 mb-4" height="700px">
      <div className="card mx-auto" style={{ width: '18rem', borderColor: '#000' }}>
        <img src={props.card.image_uris.normal} className="card-img-top" height="400px" alt="..." />
        <div className="card-body" style={{ backgroundColor: '#393e46' }}>
          <h5 className="card-title">{props.card.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.card.type_line}</h6>
          <div className="mt-3">
            <div className="d-flex justify-content-center mt-2">
              <a className="btn text-light" onClick={() => setOpen(!open)}
                aria-controls={`oracle`}
                aria-expanded={open}
              >Oracle Text</a>
              <a href="#" className="btn btn-secondary me-2" onClick={() => history.push(`card/${props.card.id}`)}>Details</a>
              {
                !isFavourite ? (
                  <button className="btn btn-secondary" onClick={() => onHandleFavourite(props.card.id)}><i class="fas fa-bookmark"></i></button>
                ) : null
              }

            </div>
          </div>
        </div>
        <Collapse in={open}>
          <div id={`oracle`} className="text-center p-3">
            {props.card.oracle_text}
          </div>
        </Collapse>
      </div>
    </div >
  )
}