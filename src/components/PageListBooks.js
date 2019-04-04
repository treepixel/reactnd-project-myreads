import React from 'react';
import BookShelf from './BookShelf';

const PageListBooks = ({ books, handleUpdateBook, onChangePage }) => {
  const shelfs = [
    { name: 'Currently Reading', value: 'currentlyReading' },
    { name: 'Read', value: 'read' },
    { name: 'Want to Read', value: 'wantToRead' }
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map(shelf => (
            <BookShelf
              key={shelf.value}
              books={books}
              shelf={shelf}
              handleUpdateBook={handleUpdateBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => onChangePage.push('/search')}>Add a book</button>
      </div>
    </div>
  );
};

export default PageListBooks;
