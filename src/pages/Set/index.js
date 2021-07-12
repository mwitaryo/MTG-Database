import Overlay from 'react-bootstrap/Overlay'
import './styles.css'
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setSet } from '../../store/actionCreator/actionCreator'
import { setFavourite } from '../../store/actionCreator/favourite'


export default function Set() {
  const dispatch = useDispatch()
  const sets = useSelector(state => state.cardReducer.sets)
  const isLoading = useSelector(state => state.cardReducer.isLoading)

  const [offset, setOffset] = useState(0)
  const pageLimit = 50
  const totalPage = Math.ceil(sets.length / pageLimit)

  useEffect(() => {
    const url = 'https://api.scryfall.com/sets'
    dispatch(setSet(url))
  }, [])

  // useEffect(async () => {
  //   dispatch(setLoading(true))
  //   try {
  //     const response = await fetch('https://api.scryfall.com/sets')
  //     const sets = await response.json()
  //     await dispatch(setLoading(false))
  //      dispatch(setSet(sets.data))
  //   } catch (error) {
  //     dispatch(setError(error))
  //   }
  // }, [])

  function handlePage(page) {
    setOffset(page)
  }

  function handleAddFavourite(setData) {
    dispatch(setFavourite(setData))
  }

  if (isLoading) return <p>Loading.....</p>
  return (
    <div className="container mt-4">
      < table className="table table-hover table-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Cards</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {
            sets.map((set, i) => {
              if (i >= offset * pageLimit && i < offset * pageLimit + pageLimit) {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td className="name"><pre><img src={set.icon_svg_uri} alt="" height="50" width="50" />  {set.name} <a id="details"> {set.mtgo_code}</a></pre></td>
                    <td>{set.card_count}</td>
                    <td>{set.released_at}</td>
                    <td>{set.set_type}</td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>

      <div className="container">
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