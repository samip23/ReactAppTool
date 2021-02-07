
import React, { Component } from "react";
import history from '../../services/history';

export default class SignIn extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Sign In</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => history.push('/Welcome')}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}