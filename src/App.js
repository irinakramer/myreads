import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'

/** Class representing top level Books App */
class BooksApp extends React.Component {

  /**
  * @description Render routes for root "/" and "/search" page
  */
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
