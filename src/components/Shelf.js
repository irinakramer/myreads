import React from 'react';
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
              props.books.map((book, key) =>
                <Book
                  updateBook={props.updateBook}
                  book={book}
                  key={key}
                />
              )
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Shelf;