import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf';

/** Class representing Home Page of the App */
class HomePage extends Component {

  /**
    * @description filter books to show only those matching the passed in shelf name
    * @param {string} str - name of the shelf
    * @returns {object} books matching the passed in shelf name
    */
  filterBooks = (str) => {
    const {books} = this.props.parentState;
    return books.filter(book => book.shelf === str)
  }

  /**
  * @description Render list of books on the Home page
  * @returns {object} JSX representing HTML for three book shelves
  */
  render() {
    
  const {changeBookShelf} = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              changeBookShelf={this.props.changeBookShelf}
              name="Currently Reading"
              books={this.filterBooks("currentlyReading")}
            />
            <Shelf
              changeBookShelf={this.props.changeBookShelf}
              name="Want to Read"
              books={this.filterBooks("wantToRead")}
            />
            <Shelf
              changeBookShelf={this.props.changeBookShelf}
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