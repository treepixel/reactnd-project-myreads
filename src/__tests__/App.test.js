import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import { shallow } from 'enzyme';

const DELAY_MS = 2000;

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
});

it('Should get books from BookAPI', async () => {
  const wrapper = shallow(<App />);
  await wrapper.instance().componentDidMount();
  await sleep(DELAY_MS);
  expect(wrapper.state(`books`).length).toBeGreaterThan(1);
  expect(wrapper.state(`isLoading`)).toEqual(false);
});

it('Should search books from BookAPI', async () => {
  const wrapper = shallow(<App />);
  await wrapper.instance().searchBooks('comic');
  await sleep(DELAY_MS);
  expect(wrapper.state(`apiBooks`).length).toBeGreaterThan(1);
});

it('Should clear search results', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().clearSearchBooks();
  expect(wrapper.state(`apiBooks`)).toEqual([]);
});

it('Should show Loading', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().showLoading();
  expect(wrapper.state(`isLoading`)).toEqual(true);
});
