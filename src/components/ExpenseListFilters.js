import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null
  };

  render() {
    return (
      <div>
        Filter expenses: 
        <input 
          type="text"
          value={this.props.filters.text}
          onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select 
          value={this.props.filters.sortBy}
          onChange={(e) => {
            e.target.value === 'date' ?
            props.dispatch(sortByDate()) :
            props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          startDateId="1"
          endDateId="2"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          showClearDates
          small
        />  
      </div>
    );
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (focusedInput) => {
    this.setState({ calendarFocused: focusedInput });
  }

}


const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);