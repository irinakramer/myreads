import React from 'react';
import PropTypes from 'prop-types';

/**
* @description Functional component for Book
* @param {object} props - props passed from the MainPage component
* @param {function} changeBookShelf - changeBookShelf passed from the MainPage component
* @returns {object} - JSX object that represents HTML for the book
*/
const Book = ({ book, changeBookShelf }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail || ""})` }}></div>
                    <div className="book-shelf-changer">
                        <select 
                            value={book.shelf || "none"} 
                            onChange={(e) => { changeBookShelf(book, e.target.value) }}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title || "Title not available..."}</div>
                <div className="book-authors">{book.authors && book.authors[0] || "Author not available..."}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    changeBookShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

export default Book;