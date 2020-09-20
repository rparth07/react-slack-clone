import React, { Component, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './providers/Userproviders';
import { signInWithGoogle, signOut } from './firebase';

function SignIn(props) {
  const auth = useContext(UserContext);
  // const { from } = props.location.state || {
  //   from: { pathname: '/home' },
  // };

  // Redirect the user if not logged in
  if (auth.user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signin-form">
      <h1>Sign In</h1>
      <button className="btn basic-btn" onClick={signInWithGoogle}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          alt="pic"
        />
        Sign in with Google
      </button>
      <div style={{ textAlign: 'center', fontSize: 13 }}>OR</div>
      <button className="btn basic-btn" onClick={signInWithGoogle}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          alt="pic"
        />
        Sign up with Google
      </button>

      <form>
        <input name="email" />
        <br />
        <input name="password" />
      </form>
    </div>
  );
}

export default SignIn;
