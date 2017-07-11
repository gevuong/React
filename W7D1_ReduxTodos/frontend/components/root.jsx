import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }> // provider is a component as well
    <App />
  </Provider>
);

export default Root;
