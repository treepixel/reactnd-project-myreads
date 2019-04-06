import React, { Component } from 'react';
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

class PageSearchBooks extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.func.isRequired,
    handleUpdateBook: PropTypes.func.isRequired,
    clearSearchBooks: PropTypes.func.isRequired,
    onChangePage: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.clearSearchBooks();
    this.textInput.current.focus();
  }

  render() {
    const { books, searchBooks, handleUpdateBook, onChangePage } = this.props;
    return (
      <St.SearchBooks>
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
              ref={this.textInput}
              placeholder="Search by title or author"
              onChange={event => searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={books} handleUpdateBook={handleUpdateBook} />
        </div>
      </St.SearchBooks>
    );
  }
}

export default PageSearchBooks;
