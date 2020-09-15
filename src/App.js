import React from 'react';
import SignIn from './SignIn';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = { counter: 1 };
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;
