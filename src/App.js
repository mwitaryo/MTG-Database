import React from 'react'
import NavBar from './components/NavBar'
import Card from './pages/Card'
import Set from './pages/Set'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CardDetail from './pages/Card/CardDetail'
import Favourite from './pages/Favourite'


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/card" component={Card} />
          <Route exact path="/set" component={Set} />
          <Route exact path="/card/:id" component={CardDetail} />
          <Route exact path="/favourite" component={Favourite} />
        </Switch>
      </Router>
    </>
  )
}
export default App;
