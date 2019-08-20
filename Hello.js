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
        <div class="row div mt2">
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 div1">
            <i class='fas icon set-font'>&#xf07a;</i>
            <h3 className='set-header'>Hyper Bazar</h3>
          </div>
          <div class="col-lg-5 div2">
            <input
              type="text"
              placeholder="search"
              onChange={this.changeHandler.bind(this)}
              className='set-input-height'
            />
          
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 div3">

            <button type="button" class="btn btn-link login-font set-float-right">LogIn</button>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 div4">
            <button type="button" class="btn btn-link login-font ">SignUp</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchUpdated: (val) => dispatch({ type: 'SEARCH_UPDATED', val })
});


export default connect(null, mapDispatchToProps)(Hello);