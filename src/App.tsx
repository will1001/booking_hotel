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
        <header>
          <Header/>
        </header>
        <main>
          <Switch>
            <Route path="/search">
              <SearchRoom />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>
        <Footer>
          <Footer/>
        </Footer>
      </Router>

    </div>
  )
}

export default App
