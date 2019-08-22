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
            <label for="uname">UserName: </label>
            <input type="text" required id="uname" name="uname" />
          </div>
          <br />
          <div>
            <label for="email">Email: </label>
            <input type="email" required id="email" name="email" />
          </div>
          <br />
          <div>
            <label for="pno">PhoneNo: </label>
            <input type="text" required id="pno" name="pno" />
          </div>
          <br />
          <div>
            <label for="pwd">Password: </label>
            <input type="password" required id="pwd" name="pwd" />
          </div>
          <br />
          <div>
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;