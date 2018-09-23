import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove any expense if id is wrong', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "123"
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
      id: '4',
      description: 'Fees',
      amount: 1200,
      createdAt: moment(0).add(30, 'years').valueOf(),
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});


test('should edit an expense', () => {
  const updates = {
    description: 'Food and Drinks',
    amount: 2000
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: '1',
    updates 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ {...expenses[0], ...updates}, expenses[1], expenses[2] ])
});

test('should not edit if expense not found', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE', 
    id: '23',
    updates: {
      description: 'hello'
    }
  });
  expect(state).toEqual(expenses);
})