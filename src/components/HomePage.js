import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Shelf from './Shelf';

/** Class representing Home Page of the App */
class HomePage extends Component {

  /** Set up initial state */
  state = {
    books: []
  }

  /**
    * @description Update book using provided update method from BookAPI
    * @param {object} book - book to be updated with a designated shelf
    * @param {object} shelf - designated shelf
    * @returns {object} updated books state
    */
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
  }

  /**
    * @description set state using provided setAll() method from BookAPI
    * @returns {object} books state
    */
  componentDidMount() {
    BooksAPI.getAll()
      .then(res => {
        this.setState({ books: res })
      })
  }

  filterBooks = (str) => {
    const {books} = this.state;
    return books.filter(book => book.shelf === str)
  }

  /**
  * @description Render list of books on the Home page
  * @returns {object} JSX representing HTML for three book shelves
  */
  render() {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              updateBook={this.updateBook}
              name="Currently Reading"
              books={this.filterBooks("currentlyReading")}
            />
            <Shelf
              updateBook={this.updateBook}
              name="Want to Read"
              books={this.filterBooks("wantToRead")}
            />
            <Shelf
              updateBook={this.updateBook}
              name="Read"
              books={this.filterBooks("read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage