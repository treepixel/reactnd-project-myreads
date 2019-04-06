import React from 'react';
import { shallow, mount } from 'enzyme';
import PageListBooks from '../components/PageListBooks';
import books from '../__mocks__/Books';

const setup = {
  books,
  handleUpdateBook: jest.fn(),
  onChangePage: { push: jest.fn() }
};

it('renders PageListBooks component without crashing', () => {
  shallow(<PageListBooks {...setup} />);
});

it('called function on event onChangePage', () => {
  const wrapper = shallow(<PageListBooks {...setup} />);
  wrapper.find('button').simulate('click');
  expect(setup.onChangePage.push).toHaveBeenCalledTimes(1);
});
