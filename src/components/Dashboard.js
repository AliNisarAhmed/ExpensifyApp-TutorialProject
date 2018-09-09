import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashBoardPage = ({ expenses }) => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashBoardPage;