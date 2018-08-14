import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import "./styles/styles.scss";

import AppRouter from './routers/AppRouters'


const element = document.getElementById('app');

ReactDOM.render(<AppRouter />, element);