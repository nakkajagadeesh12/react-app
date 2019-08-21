import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Cart from './Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Home} />
          <Route xacrpath="/cart" component={Cart}/>
        </BrowserRouter>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
