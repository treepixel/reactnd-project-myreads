import React from 'react';
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types';

const BookShelf = ({ books, shelf, handleUpdateBook }) => {
  const booksByShelf = books.filter(book => {
    return book.shelf === shelf.value;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={booksByShelf} handleUpdateBook={handleUpdateBook} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  handleUpdateBook: PropTypes.func.isRequired
};

export default BookShelf;
