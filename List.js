import React from 'react';
import './style1.scss';

class List extends React.Component {
  render() {
    return (
      <div class="fluid-container main menu-styl" >
        <div class="container row div" style={{ color: "white", padding: "10px" }}>
          <div class="col-lg-2 item">Menswear</div>
          <div class="col-lg-2 item">Womenswear</div>
          <div class="col-lg-2 item">Kidswear</div>
          <div class="col-lg-2 item">Electronics</div>
          <div class="col-lg-2 item">Furniture</div> 
        </div>
      </div>
    )
  }
}

export default List;