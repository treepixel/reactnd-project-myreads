import React from 'react';
import { shallow, mount } from 'enzyme';
import PageDetailBook from '../components/PageDetailBook';
import { BrowserRouter } from 'react-router-dom';

const setup = {
  id: 'Ikva_afQXWMC',
  onChangePage: { push: jest.fn() }
};

it('renders PageSearchBooks component without crashing', () => {
  mount(
    <BrowserRouter>
      <PageDetailBook {...setup} />
    </BrowserRouter>
  );
});
