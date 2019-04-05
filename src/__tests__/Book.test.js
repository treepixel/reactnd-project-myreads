import React from 'react';
import { shallow, mount } from 'enzyme';
import Book from '../components/Book';
import books from '../__mocks__/Books';

const setup = {
  book: books[0],
  onUpdateBook: jest.fn()
};

it('renders Book component without crashing', () => {
  shallow(<Book {...setup} />);
});
