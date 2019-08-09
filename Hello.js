import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  changeHandler(e) {
    this.props.searchUpdated(e.target.value);
  }
  render() {
    return (
      <div class="fluid-container main">
        <div class="row div">
          <div class="col-lg-3 div1">
            <h3>Hyper Bazar</h3>
          </div>
          <div class="col-lg-5 div2">
            <input
              type="text"
              placeholder="Search"
              onChange={this.changeHandler.bind(this)}
            />
          </div>
          <div class="col-lg-2 div3">
            <button type="button" class="btn btn-link">LogIn</button>
          </div>
          <div class="col-lg-2 div4">
            <button type="button" class="btn btn-link">SignUp</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchUpdated: (val) => dispatch({ type: 'SEARCH_UPDATED', val })
});


export default connect(mapStateToProps, mapDispatchToProps)(Hello);