import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

render(
  <Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
