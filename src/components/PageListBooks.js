import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

const PageListBooks = ({ books, handleUpdateBook, onChangePage }) => {
  const shelfs = [
    { name: 'Currently Reading', value: 'currentlyReading' },
    { name: 'Read', value: 'read' },
    { name: 'Want to Read', value: 'wantToRead' }
  ];

  return (
    <div className="list-books">
      <St.Title>
        <h1>MyReads</h1>
      </St.Title>
      <St.Content padding="0 0 80px">
        {shelfs.map(shelf => (
          <BookShelf
            key={shelf.value}
            books={books}
            shelf={shelf}
            handleUpdateBook={handleUpdateBook}
          />
        ))}
      </St.Content>
      <St.OpenSearch>
        <button onClick={() => onChangePage.push('/search')}>Add a book</button>
      </St.OpenSearch>
    </div>
  );
};

PageListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateBook: PropTypes.func.isRequired,
  onChangePage: PropTypes.object.isRequired
};

export default PageListBooks;
