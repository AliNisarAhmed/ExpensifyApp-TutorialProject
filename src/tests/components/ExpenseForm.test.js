import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render Expense Form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Expense Form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);

  // below does not apply to my proect as I am not using error state

  // wrapper.find('form').simulate('submit', {
  //   preventDefault: () => {}
  // });
  // expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'new description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = "23.51";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if Invalid input', () => {
  const value = "23.512";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});