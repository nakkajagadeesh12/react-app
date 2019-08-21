import React from 'react';
import './ItemList.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
class ItemList extends React.Component {
  render() {
    return (
      <div className="item-list">
        {items.map(item => {
          return (
            <div className="item-it">
              <div className="it-1">
                {item}
              </div>
              <div className="it-2">
                <div className="class1"><button className="btn1">Add to cart</button></div>
                <div className="class2"><button className="btn2">Buy Now</button></div>
              </div>
              <div className="it-3">
                <p>product {item}</p>
              </div>
            </div>)
        })}
      </div>
    )
  }
}

export default ItemList;