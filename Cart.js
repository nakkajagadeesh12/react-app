
import React from 'react';
import Hello from './Hello';
import List from './List';

const Cart = (props) => {
  return (
    <div>
      <Hello />
      <List />
      <h1>Cart is empty</h1>
      {console.log(props.data)}
    </div>
  )
}

export default Cart;