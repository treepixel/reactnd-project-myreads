import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksGrid from '../components/BooksGrid';
import books from '../__mocks__/Books';

const setup = {
  books,
  handleUpdateBook: jest.fn()
};

it('renders BooksGrid component without crashing', () => {
  shallow(<BooksGrid {...setup} />);
});
