// This is a mock of moment library

// import moment from 'moment'; we cannot import the real moment library coz inside this file moment means the mocked library

// Check jest docs Manual Mocks

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
}