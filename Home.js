import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
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
        <Header />
        <List />
        <ItemList />
        <Footer/>
      </div>
    );
  }
}
export default Home;
