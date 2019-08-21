import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import ItemList from './ItemList';
import { BrowserRouter } from 'react-router-dom';

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
        <List />
        <ItemList />
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider></BrowserRouter>, document.getElementById('root'));
