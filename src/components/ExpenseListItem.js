import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ expense, dispatch }) => (
  <div>
    <Link to={`/edit/${expense.id}`}>
      <h3>Description: {expense.description}</h3>
    </Link>
    <p>Amount: {expense.amount}</p>  
    <p>Note: {expense.note}</p>  
    <p>Dated: {expense.createdAt}</p>
  </div>
);

export default ExpenseListItem;

