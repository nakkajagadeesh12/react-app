import React from 'react';
import Hello from './Hello';
import List from './List';
import './Login.css';

const Login = () => {
  return (
    <div>
      <Hello />
      <List />
      <h1>Login</h1>
      <div class="jumbotron login-class">
        <form>
          <div>
            <label for="uname">UserName: </label><br />
            <input type="text" required id="uname" name="uname" />
          </div>
          <br />
          <div>
            <label for="pwd">Password: </label><br />
            <input type="password" required id="pwd" name="pwd" />
          </div>
          <br />
          <div class="login-btn">
            <button class="btn btn-primary log-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;