import React from 'react';
import { shallow, mount } from 'enzyme';
import PageSearchBooks from '../components/PageSearchBooks';
import books from '../__mocks__/Books';
import { BrowserRouter } from 'react-router-dom';

const setup = {
  books,
  searchBooks: jest.fn(),
  handleUpdateBook: jest.fn(),
  onChangePage: { push: jest.fn() },
  clearSearchBooks: jest.fn()
};

it('renders PageSearchBooks component without crashing', () => {
  mount(
    <BrowserRouter>
      <PageSearchBooks {...setup} />
    </BrowserRouter>
  );
});

it('called function on event onChangePage', () => {
  const test = mount(
    <BrowserRouter>
      <PageSearchBooks {...setup} />
    </BrowserRouter>
  );
  test.find('button').simulate('click');
  expect(setup.onChangePage.push).toHaveBeenCalledTimes(1);
});

it('called function on event searchBook', () => {
  const wrapper = mount(
    <BrowserRouter>
      <PageSearchBooks {...setup} />
    </BrowserRouter>
  );
  wrapper.find('input').simulate('change');
  expect(setup.searchBooks).toHaveBeenCalledTimes(1);
});
