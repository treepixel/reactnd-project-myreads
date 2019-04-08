import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';
import Loading from './Loading';

class PageDetailBook extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onChangePage: PropTypes.object.isRequired
  };

  state = {
    book: {},
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;
    BooksAPI.get(id).then(book => {
      this.setState(() => ({
        book,
        isLoading: false
      }));
    });
  }

  render() {
    const { onChangePage } = this.props;
    const { book, isLoading } = this.state;
    return (
      <St.Page>
        <St.Title>
          <button
            onClick={() => {
              onChangePage.goBack();
            }}
          />
          <h1>MyReads</h1>
        </St.Title>
        {isLoading ? (
          <Loading />
        ) : (
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
                  {book.authors ? book.authors.join(', ') : ''}
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
        )}
      </St.Page>
    );
  }
}

export default PageDetailBook;
