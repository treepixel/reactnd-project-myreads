import React from 'react';
import BookShelf from './BookShelf';
import Loading from './Loading';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

const PageListBooks = ({
  books,
  handleUpdateBook,
  onChangePage,
  isLoading
}) => {
  const shelfs = [
    { name: 'Currently Reading', value: 'currentlyReading' },
    { name: 'Read', value: 'read' },
    { name: 'Want to Read', value: 'wantToRead' }
  ];

  return (
    <St.Page>
      <St.Title>
        <h1>MyReads</h1>
      </St.Title>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
      <St.OpenSearch>
        <button onClick={() => onChangePage.push('/search')}>Add a book</button>
      </St.OpenSearch>
    </St.Page>
  );
};

PageListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateBook: PropTypes.func.isRequired,
  onChangePage: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default PageListBooks;
