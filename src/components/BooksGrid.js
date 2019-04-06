import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

const BooksGrid = ({ books, handleUpdateBook }) => (
  <St.BooksGrid>
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} onUpdateBook={handleUpdateBook} />
      </li>
    ))}
  </St.BooksGrid>
);

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateBook: PropTypes.func.isRequired
};

export default BooksGrid;
