import React from 'react';
import BooksGrid from './BooksGrid';

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

export default BookShelf;
