import React from 'react';
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

const BookShelf = ({ books, shelf, handleUpdateBook }) => {
  const booksByShelf = books.filter(book => {
    return book.shelf === shelf.value;
  });

  return (
    <St.BookShelf>
      <h2>{shelf.name}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={booksByShelf} handleUpdateBook={handleUpdateBook} />
      </div>
    </St.BookShelf>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  handleUpdateBook: PropTypes.func.isRequired
};

export default BookShelf;
