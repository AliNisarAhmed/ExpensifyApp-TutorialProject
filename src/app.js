import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import "./styles/styles.scss";

import configureStore from './store/configureStore';

import AppRouter from './routers/AppRouters';
import getFilteredExpenses from './selectors/expenses';


const store = configureStore();
const state = store.getState()
const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const element = document.getElementById('app');

ReactDOM.render(jsx, element);