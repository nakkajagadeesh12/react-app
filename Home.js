import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import './Header.scss';
import List from './List';
import ItemList from './ItemList';
import {Footer}  from './Footer'
import './global.css'

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
        <div className='pt20'>
        <Footer/>
        </div>
      </div>
    );
  }
}
export default Home;
