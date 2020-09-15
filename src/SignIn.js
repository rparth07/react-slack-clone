import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In</h1>
        <button>Sign in with Google</button>
        <form>
          <input name="email" />
          <input name="password" />
        </form>
      </div>
    );
  }
}
export default SignIn;
