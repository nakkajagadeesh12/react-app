import React from 'react';
import Hello from './Hello';
import List from './List';
import './Signup.css';

const Signup = () => {
  return (
    <div>
      <Hello />
      <List />
      <h1>Registration</h1>
      <div class="jumbotron form-class">
        <form>
          <div>
            <label for="uname">UserName: </label> <br />
            <input type="text" required id="uname" name="uname" />
          </div>
          <br />
          <div>
            <label for="email">Email: </label> <br />
            <input type="email" required id="email" name="email" />
          </div>
          <br />
          <div>
            <label for="pno">PhoneNo: </label> <br />
            <input type="text" required id="pno" name="pno" />
          </div>
          <br />
          <div>
            <label for="pwd">Password: </label> <br />
            <input type="password" required id="pwd" name="pwd" />
          </div>
          <br />
          <div className="signin-btn">
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;