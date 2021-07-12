import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCard } from '../../store/actionCreator/actionCreator'
import CardList from './CardList'
import Spinner from 'react-bootstrap/Spinner'


export default function Card() {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cardReducer.cards)
  const isLoading = useSelector(state => state.cardReducer.isLoading)

  const [offset, setOffset] = useState(0)
  const pageLimit = 40
  const totalPage = Math.ceil(cards.length / pageLimit)

  function handlePage(page) {
    setOffset(page)
  }


  useEffect(() => {
    const url = 'https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1'
    dispatch(setCard(url))
  }, [])


  return (
    <>
      {
        isLoading ? (
          <div className="container">
            <Spinner animation="border" role="status">
            <h1 className="text-light sr-only">Loading...</h1>
            </Spinner>
          </div>

        ) : (


          < div className="container d-flex flex-column">
            <div className="d-flex flex-wrap m-5 justify-content-center">
              {
                cards.map((card, i) => {
                  if (i >= offset * pageLimit && i < offset * pageLimit + pageLimit) {
                    return (
                      <CardList key={i} card={card} />
                    )
                  }
                })
              }
            </div>

            <div className="mx-auto mb-4">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">&laquo;</a>
                </li>
                {
                  [...Array(totalPage)].map((a, page) => (
                    <li className="page-item" key={page}>
                      <a className="page-link"
                        onClick={() => handlePage(page)}>
                        {page + 1}
                      </a>
                    </li>
                  ))
                }
                <li className="page-item">
                  <a className="page-link" href="#">&raquo;</a>
                </li>
              </ul>

            </div>
          </div>


        )

      }


    </>

  )
}



