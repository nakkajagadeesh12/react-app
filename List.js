import React from 'react';
import './style1.scss';

const list = ['Menswear', 'Womenswear', 'Kidswear', 'Electronics', 'Furniture'];

class List extends React.Component {
  render() {
    return (
      <div class="fluid-container main menu-styl" >
        <div class="container row div" style={{ color: "white", padding: "10px" }}>
          {
            list && list.map((item) => {
              return (
                <div class="col-lg-2 item">
                  <div className="dropdown">
                    {item}
                    <div className="dropdown-content">
                      <a href="#">link1</a>
                      <a href="#">link2</a>
                      <a href="#">link3</a>
                      <a href="#">link4</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div class="col-lg-2 cart-icon"><i class="fas fa-shopping-cart"></i></div>
        </div>
      </div>
    )
  }
}

export default List;