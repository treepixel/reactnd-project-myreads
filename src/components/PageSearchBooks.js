import React, { Component } from 'react';
import BooksGrid from './BooksGrid';

class PageSearchBooks extends Component {
  componentWillMount() {
    this.props.clearSearchBooks();
  }

  render() {
    const { books, searchBooks, handleUpdateBook, onChangePage } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => {
              onChangePage.push('/');
            }}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={books} handleUpdateBook={handleUpdateBook} />
        </div>
      </div>
    );
  }
}

export default PageSearchBooks;
