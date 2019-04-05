import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, book, handleChange }) => (
  <select
    value={book.shelf}
    onChange={event => handleChange(book, event.target.value)}
  >
    <option value="move" disabled>
      Move to...
    </option>
    {options.map(item => (
      <option key={item.value} value={item.value}>
        {item.name}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  options: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;
