import React from 'react';
import { connect } from 'react-redux';
import getFilteredExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
  <div>
    {
      expenses.map(expense => 
        <div key={expense.id}>
          <h1>Description: {expense.description}</h1>
          <p>Amount: {expense.amount}</p>  
          <p>Note: {expense.note}</p>  
          <p>Dated: {expense.createdAt}</p>  
        </div>
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