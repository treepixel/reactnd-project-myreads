import React from 'react';
import { shallow, mount } from 'enzyme';
import BookShelf from '../components/BookShelf';
import books from '../__mocks__/Books';

const setup = {
  books,
  shelf: {
    name: 'Read',
    value: 'read'
  },
  handleUpdateBook: jest.fn()
};

it('renders BookShelf component without crashing', () => {
  shallow(<BookShelf {...setup} />);
});
