import moment from "moment";


export default [
  {
    id: '1',
    description: 'Food',
    amount: 100,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
  {
    id: '2',
    description: 'Rent',
    amount: 200,
    createdAt: 0,
  },
  {
    id: '3',
    description: 'Credit Card',
    amount: 300,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  }
]