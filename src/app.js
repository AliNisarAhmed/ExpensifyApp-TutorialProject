import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouters';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import "./styles/styles.scss";

import configureStore from './store/configureStore';
import getFilteredExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();


store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 1000,
  note: 'water bill for the month of September 18',
  createdAt: 100
}));

store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 900,
  note: 'Gas bill for the month of September 18',
  createdAt: 102
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 1500,
  note: 'Gas bill for the month of September 18',
  createdAt: 101
}));


const state = store.getState();

const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);




const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const element = document.getElementById('app');

ReactDOM.render(jsx, element);