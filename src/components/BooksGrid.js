import React from 'react';
import Book from './Book';

const BooksGrid = ({ books, handleUpdateBook }) => (
  <ol className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} onUpdateBook={handleUpdateBook} />
      </li>
    ))}
  </ol>
);

export default BooksGrid;
