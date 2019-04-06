import React from 'react';
import { shallow, mount } from 'enzyme';
import PageDetailBook from '../components/PageDetailBook';
import { BrowserRouter } from 'react-router-dom';

const DELAY_MS = 2000;

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const setup = {
  id: 'Ikva_afQXWMC',
  onChangePage: { goBack: jest.fn() }
};

it('renders PageSearchBooks component without crashing', () => {
  mount(
    <BrowserRouter>
      <PageDetailBook {...setup} />
    </BrowserRouter>
  );
});

it('called function on event onChangePage', () => {
  const wrapper = shallow(<PageDetailBook {...setup} />);
  wrapper.find('button').simulate('click');
  expect(setup.onChangePage.goBack).toHaveBeenCalledTimes(1);
});

it('Should get Book from BookAPI', async () => {
  const wrapper = shallow(<PageDetailBook {...setup} />);
  await wrapper.instance().componentDidMount();
  await sleep(DELAY_MS);
  expect(wrapper.state(`book`)).toHaveProperty(`id`, `Ikva_afQXWMC`);
});
