import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage from '../../components/Dashboard';
import expenses from '../fixtures/expenses';

test('should render DashBoardPage component', () => {
  const wrapper = shallow(<DashBoardPage expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
})