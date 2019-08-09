import React from 'react';
import './style1.scss';

class List extends React.Component {
  render() {
    return (
      <div class="fluid-container main" style={{ backgroundColor: "cyan", padding: "10px" }}>
        <div class="container row div" style={{ color: "white", padding: "10px" }}>
          <div class="col-lg-2">
            <div class="dropdown">
              <button type="select" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Menswear
  </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
              </div>
            </div>

          </div>
          <div class="col-lg-2">Womenswear</div>
          <div class="col-lg-2">Kidswear</div>
          <div class="col-lg-2">Electronics</div>
        </div>
      </div>
    )
  }
}

export default List;