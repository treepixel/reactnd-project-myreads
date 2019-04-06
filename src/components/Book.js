import React from 'react';
import Select from './Select';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as St from '../styles/Styles';

const Book = ({ book, onUpdateBook }) => {
  const { id, title, authors, imageLinks } = book;
  const options = [
    { value: 'currentlyReading', name: 'Currently Reading' },
    { value: 'wantToRead', name: 'Want to Read' },
    { value: 'read', name: 'Read' },
    { value: 'none', name: 'None' }
  ];

  return (
    <St.Book>
      <div className="book-top">
        <Link to={`/book/${id}`}>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${
                imageLinks ? imageLinks.smallThumbnail : 'http://bit.ly/2BFHV2l'
              })`
            }}
          />
        </Link>
        <div className="book-shelf-changer">
          <Select options={options} book={book} handleChange={onUpdateBook} />
        </div>
      </div>
      <Link to={`/book/${id}`}>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </Link>
    </St.Book>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Book;
