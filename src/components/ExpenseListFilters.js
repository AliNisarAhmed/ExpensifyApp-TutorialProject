import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    Filter expenses: 
    <input 
      type="text"
      value={props.filters.text}
      onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);