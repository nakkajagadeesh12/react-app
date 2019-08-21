import React, { useState, useEffect } from 'react';
import './ItemList.css';

// class ItemList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: '',
//     }
//   }
//   componentWillMount() {
//     fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json()).then((response) => this.setState({ data: response }));
//   }
//   render() {
//     const { data } = this.state;
//     return (
//       <div className="item-list">
//         {data && data.map(item => {
//           return (
//             <div className="item-it">
//               <div className="it-1">
//                 <img src={item.thumbnailUrl} alt="image" />
//                 <div className="it-3">
//                   <p>product {item.id}</p>
//                 </div>
//               </div>
//               <div className="it-2">
//                 <div className="class1"><button className="btn1">Add to cart</button></div>
//                 <div className="class2"><button className="btn2">Buy Now</button></div>
//               </div>

//             </div>)
//         })}
//       </div>
//     )
//   }
// }

const ItemList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json()).then((response) => setData(response))
  }, [])

  const buttonClick = (item) => {
    console.log(item.id);
  }
  return (
    <div className="item-list">
      {data && data.map(item => {
        return (
          <div className="item-it">
            <div className="it-1">
              <img src={item.thumbnailUrl} alt="image" />
              <div className="it-3">
                <p>product {item.id}</p>
              </div>
            </div>
            <div className="it-2">
              <div className="class1"><button className="btn1" onClick={() => buttonClick(item)}>Add to cart</button></div>
              <div className="class2"><button className="btn2">Buy Now</button></div>
            </div>
          </div>)
      })}
    </div>
  )
}

export default ItemList;