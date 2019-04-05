import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import PropTypes from 'prop-types';

class PageDetailBook extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onChangePage: PropTypes.object.isRequired
  };

  state = {
    book: {}
  };

  componentDidMount() {
    const { id } = this.props;
    BooksAPI.get(id).then(book => {
      this.setState(() => ({
        book
      }));
    });
  }

  render() {
    const { onChangePage } = this.props;
    const { book } = this.state;
    return (
      <div>
        <div className="list-books-title">
          <button
            className="back-list"
            onClick={() => {
              onChangePage.goBack();
            }}
          />
          <h1>MyReads</h1>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex' }}>
            <img
              src={
                book.imageLinks
                  ? book.imageLinks.smallThumbnail
                  : 'http://bit.ly/2BFHV2l'
              }
              alt={book.title}
              style={{ marginRight: '20px', width: 128, height: 188 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{ marginTop: 0, marginBottom: '10px', lineHeight: '1' }}
              >
                {book.title}
              </h3>
              {book.subtitle && (
                <h5 style={{ margin: '10px 0' }}>{book.subtitle}</h5>
              )}
              <span>
                <strong>Authors: </strong>
                {book.authors}
              </span>
              <span>
                <strong>Language: </strong>
                {book.language}
              </span>
              <span>
                <strong>Published: </strong>
                {book.publishedDate}
              </span>
              <span>
                <strong>Pages: </strong>
                {book.pageCount}
              </span>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #ccc',
              marginTop: '20px'
            }}
          >
            <h5 style={{ marginTop: '10px' }}>Description:</h5>
            <p style={{ textAlign: 'justify' }}>{book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageDetailBook;
