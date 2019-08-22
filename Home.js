import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import List from './List';
import ItemList from './ItemList';
import {Footer}  from './Footer'

class Home extends Component {
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
        <Footer/>
      </div>
    );
  }
}
export default Home;
