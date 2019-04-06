import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

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
        <St.Title>
          <button
            onClick={() => {
              onChangePage.goBack();
            }}
          />
          <h1>MyReads</h1>
        </St.Title>
        <St.Content padding="20px">
          <St.BookInfo>
            <img
              src={
                book.imageLinks
                  ? book.imageLinks.smallThumbnail
                  : 'http://bit.ly/2BFHV2l'
              }
              alt={book.title}
            />
            <St.BookResume>
              <h3>{book.title}</h3>
              {book.subtitle && <h5>{book.subtitle}</h5>}
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
            </St.BookResume>
          </St.BookInfo>
          <St.Description>
            <h5>Description:</h5>
            <p>{book.description}</p>
          </St.Description>
        </St.Content>
      </div>
    );
  }
}

export default PageDetailBook;
