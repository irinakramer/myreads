import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'

/** Class representing top level Books App */
class BooksApp extends React.Component {

/** Set up initial state */
state = {
  books: []
}

/**
* @description set state using provided setAll() method from BookAPI
* @returns {object} books state
*/
componentDidMount() {
  BooksAPI.getAll()
    .then(res => {
      this.setState(() => ({ 
        books: res 
      }))
    })
}

/**
* @description Update book using provided update method from BookAPI
* @param {object} book - book to be updated with a designated shelf
* @param {object} shelf - designated shelf
* @returns {object} updated books state
*/
changeBookShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
}

// TODO: add books not found component

// TODO: Add PropTypes

  /**
  * @description Render routes for root "/" and "/search" page
  */
  render() {
    return (
      <div>
        <Route 
          exact path="/" 
          render={()=> 
            <HomePage 
              parentState={this.state} 
              changeBookShelf={this.changeBookShelf} 
            />}  
        />
        <Route 
          exact path="/search" 
          render={()=> 
            <SearchPage 
              parentState={this.state} 
              changeBookShelf={this.changeBookShelf} 
            />}  
        />
      </div>
    )
  }
}

export default BooksApp
