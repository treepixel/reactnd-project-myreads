import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BooksGrid = ({ books, handleUpdateBook }) => (
  <ol className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} onUpdateBook={handleUpdateBook} />
      </li>
    ))}
  </ol>
);

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateBook: PropTypes.func.isRequired
};

export default BooksGrid;
