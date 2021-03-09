import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

/** Class representing Search Page of the App */
class SearchPage extends Component {

  /** Set up props and state */
  state = {
    books: this.props.parentState.books,
    searchResults: [],
    query: ""
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
      return this.setState({ searchResults: [] })
    }

    BooksAPI.search(query.trim()).then(res => {
      if (res.error) {
        return this.setState({ searchResults: [] });
      } else {
        res.forEach(book => {
          let foundBook = books.filter(bookToFilter => bookToFilter.id === book.id);
          if (foundBook[0]) {
            console.log("foundBook: ", foundBook);
            console.log("foundBook[0].shelf: ", foundBook[0].shelf);
            book.shelf = foundBook[0].shelf;
          }
        });
        return this.setState({ searchResults: res });
      }
    });
  }

  /**
  * @description Render list of books on search page
  * @returns {object} JSX representing HTML for all books based on search query
  */
  render() {
    console.log("this.state.searchResults: ", this.state.searchResults);
    const {searchResults, query} = this.state;
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
            // Conditional to show books if found in search, 
            // or 'not found' if not found in search
            (this.state.searchResults.length !== 0) 
              ?
              this.state.searchResults.map((book, key) => 
              <Book changeBookShelf={this.props.changeBookShelf} book={book} key={key} />)
              :
              <p>No books foundBook. Use search bar above to find some books.</p>
            }
          </ol>
        </div>
      </div>
    )
  }
}

SearchPage.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  parentState: PropTypes.object.isRequired
}

export default SearchPage;