import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book';

/** Class representing Search Page of the App */
class SearchPage extends Component {

  /** Set up props and state */
  state = {
    books: [],
    results: [],
    query: ""
  }

  /**
    * @description set state using provided setAll() method from BookAPI
    * @returns {object} books state
    */
  componentDidMount() {
    BooksAPI.getAll()
      .then(resp => {
        this.setState({ books: resp })
      });
  }

  /**
    * @description Update query in the state
    * @param {property} query - query entered by user
    * @returns {object} updated state
    */
  updateQuery = (query) => {
    this.setState({ query: query }, this.submitSearch);
  }

  /**
    * @description Submit search using provided search() method from BooksAPI
    * @param {property} query - query entered by user
    * @returns {object} updated state
    */
  submitSearch() {
    const {books, query} = this.state;
    if (query === "" || query === undefined) {
      return this.setState({ results: [] })
    }

    BooksAPI.search(query.trim()).then(res => {
      if (res.error) {
        return this.setState({ results: [] });
      } else {
        res.forEach(b => {
          let f = books.filter(B => B.id === b.id);
          if (f[0]) {
            b.shelf = f[0].shelf;
          }
        });
        return this.setState({ results: res });
      }
    });
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
        }));
      })
  }

  /**
  * @description Render list of books on search page
  * @returns {object} JSX representing HTML for all books based on search query
  */
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={this.state.query} 
              onChange={(event) => this.updateQuery(event.target.value)} 
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results.map((book, key) => 
              <Book updateBook={this.updateBook} book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;