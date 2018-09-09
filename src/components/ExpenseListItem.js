import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ expense, dispatch }) => (
  <div>
    <h1>Description: {expense.description}</h1>
    <p>Amount: {expense.amount}</p>  
    <p>Note: {expense.note}</p>  
    <p>Dated: {expense.createdAt}</p>
    <button
      onClick={() => dispatch(removeExpense({ id: expense.id }))}
    >
    Remove
    </button> 
  </div>
);

export default connect()(ExpenseListItem);

