import React from 'react';
import { connect } from "react-redux";
import ExpenseList from './ExpenseList';

const DashBoardPage = ({ expenses }) => (
  <div>
    <ExpenseList />
  </div>
);

export default DashBoardPage;