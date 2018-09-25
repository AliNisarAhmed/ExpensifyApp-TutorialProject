import React from 'react';
import { connect } from 'react-redux';
import getFilteredExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = ({ expenses }) => (
  <div>
    {
      expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        expenses.map(expense => 
          <ExpenseListItem key={expense.id} expense={expense} />  
        )
      )
    }
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getFilteredExpenses(state.expenses, state.filters)
  }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;