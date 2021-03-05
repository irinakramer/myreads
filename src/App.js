import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import SearchPage from './components/pages/SearchPage'

/** Class representing top level Books App */
class BooksApp extends React.Component {

  /**
  * @description Render routes for root "/" and "/search" page
  */
  render() {
    return (
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
