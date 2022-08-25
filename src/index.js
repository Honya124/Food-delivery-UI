import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './store/shopping-cart/cartSlice'
import cartUISlice from './store/shopping-cart/cartUISlice';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

const store=configureStore({
  reducer:{
    cart:cartSlice.reducer,
    cartUI:cartUISlice.reducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Provider store={store}>
    <App />
    </Provider>
    </Router >
  </React.StrictMode>
);


