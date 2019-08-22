import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
