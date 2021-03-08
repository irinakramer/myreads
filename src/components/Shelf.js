import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
* @description Functional component for Shelf
* @param {object} props - props passed from the MainPage component
* @returns {object} - JSX object that represents HTML for the book shelf
*/
const Shelf = (props) => {
  
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.name}: {props.books.length}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              props.books.map((book) =>
                <Book
                  changeBookShelf={props.changeBookShelf}
                  book={book}
                  key={book.id}
                />
              )
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default Shelf;