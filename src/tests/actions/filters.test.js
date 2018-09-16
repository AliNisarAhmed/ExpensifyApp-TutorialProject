import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should set text filter using given string', () => {
  const action = setTextFilter('abc123');
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: 'abc123'
  });
});

test('should set text filter using default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ''
  });
});

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});