import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedCard } from '../../store/actionCreator/actionCreator'


function NavBar() {
  const [keyword, setKeyword] = useState('')
  const [autocomplete, setAutocomplete] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const selectedCard = useSelector(state => state.cardReducer.selectedCard)


  let options
  if (autocomplete) {
    options = autocomplete.map(element => {
      return {
        value: element,
        label: element
      }
    })
  }

  const icons = [
    {
      name: 'white',
      path: 'http://mythicspoiler.com/images/buttons/wreflectionbright.jpg'
    },
    {
      name: 'blue',
      path: 'http://mythicspoiler.com/images/buttons/ureflectionbright.jpg'
    },
    {
      name: 'black',
      path: 'http://mythicspoiler.com/images/buttons/breflectionbright.jpg'
    },
    {
      name: 'red',
      path: 'http://mythicspoiler.com/images/buttons/rreflectionbright.jpg'
    },
    {
      name: 'green',
      path: 'http://mythicspoiler.com/images/buttons/greflectionbright.jpg'
    },
    {
      name: 'gold',
      path: 'http://mythicspoiler.com/images/buttons/goldreflectionbright.jpg'
    },
    {
      name: 'creatures',
      path: 'http://mythicspoiler.com/images/buttons/creaturesreflectionbright.jpg'
    },
    {
      name: 'instants',
      path: 'http://mythicspoiler.com/images/buttons/instantsreflectionbright.jpg'
    },
    {
      name: 'sorceries',
      path: 'http://mythicspoiler.com/images/buttons/sorceriesreflectionbright.jpg'
    },
    {
      name: 'enchantments',
      path: 'http://mythicspoiler.com/images/buttons/enchantmentsreflectionbright.jpg'
    },
    {
      name: 'artifacts',
      path: 'http://mythicspoiler.com/images/buttons/artifactsreflectionbright.jpg'
    },
    {
      name: 'land',
      path: 'http://mythicspoiler.com/images/buttons/landreflectionbright.jpg'
    },
    {
      name: 'planeswalkers',
      path: 'http://mythicspoiler.com/images/buttons/planeswalkersreflectionbright.jpg'
    }
  ]


  // function handleKeyPress(event) {
  //   if (event.key === 'Enter') {
  //     console.log('Enter press here');
  //   }
  // }

  function handleIcon(name) {
    console.log(name);
  }

  function handleChange(event) {
    const newKeyword = event.target.value
    setKeyword(newKeyword)
  }


  const handleSelected = async (event) => {
    const keyword = encodeURIComponent(event.value)
    const url = `https://api.scryfall.com/cards/named?exact=${keyword}`
    await dispatch(fetchSelectedCard(url))
    history.push(`card/${selectedCard.id}`)
  }


  useEffect(async () => {
    try {
      const response = await fetch(`https://api.scryfall.com/cards/autocomplete?q=${keyword}`)
      const autocomplete = await response.json()
      setAutocomplete(autocomplete.data)
    } catch (error) {
      console.log(error);
    }
  }, [keyword])


  const handleRandom = async () => {
    const url = 'https://api.scryfall.com/cards/random'
    await dispatch(fetchSelectedCard(url))
    history.push(`/card/${selectedCard.id}`)
  }

  return (
    <div className="container">
      <div className="mt-4">
        <table width="1200" className="mx-auto" valign="top">
          <tbody>
            <tr width="1200" >
              {
                icons.map((element, i) => (
                  <td align="left" colSpan="2" style={{ clear: "right" }} key={i}>
                    <a onClick={() => handleIcon(element.name)}>
                      <img align="left" width="81" height="153" name="image1" src={element.path} />
                    </a>
                  </td>
                ))
              }
            </tr>
          </tbody>
        </table>
      </div>

      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Search"
          className="form-control"
        />

        {
          options ? (<Select value={options.value} onChange={handleSelected} options={options} />) : null
        }



      </div>

      <div className="d-flex justify-content-center m-3">
      <div className="m-2">
          <a className="btn btn-secondary" onClick={() => { history.push('/') }}> Home</a>

        </div>
        <div className="m-2">
          <a className="btn btn-secondary" onClick={handleRandom}> Random Card</a>

        </div>
        <div className="m-2">
          <a className="btn btn-secondary" onClick={() => { history.push('/set') }}> Set</a>

        </div>
        <div className="m-2">
          <a className="btn btn-secondary" onClick={() => { history.push('/card') }}>Card</a>

        </div>
        <div className="m-2">
          <a className="btn btn-secondary" onClick={() => { history.push('/favourite') }}>Favourite</a>

        </div>
      </div>



    </div >
  )
}

// class NavBar extends Component {
//   render() {
//     return (
//       <ul className="topnav">
//         <li><a className="active" href="#home">Home</a></li>
//         <li><a href="#character">Character</a></li>
//         <li><a href="#book">Book</a></li>
//         <li className="right"><a href="#about">About</a></li>
//       </ul>
//     )
//     // return (
//     //   < Router >
//     //   <div>
//     //     <ul className="topnav">
//     //       <li>
//     //         <Link to='/'>
//     //           <a className="active" href="#home">Home</a>
//     //         </Link>
//     //       </li>
//     //       <li>
//     //         <Link to="/character">
//     //           <a href="#news">Character</a>
//     //         </Link>
//     //       </li>
//     //     </ul>

//     //     <Switch>
//     //       <Route path="/character">
//     //         <CharacterCard />
//     //       </Route>
//     //     </Switch>
//     //   </div>
//     //   </Router >
//     // )
//   }

// }

export default NavBar