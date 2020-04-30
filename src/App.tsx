import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import SearchRoom from './pages/SearchRoom'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/search">
            <Header fixed={false} bg='#000' />
            <SearchRoom />
          </Route>
          <Route path="/">
            <Header fixed={true} bg='transparent' />
            <LandingPage />
          </Route>
        </Switch>
        <Footer/>

      </Router>

    </div>
  )
}

export default App
