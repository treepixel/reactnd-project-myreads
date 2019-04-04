import React from 'react';

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

export default Select;
