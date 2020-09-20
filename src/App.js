import React from 'react';
import SignIn from './SignIn';
import './App.css';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import MainContainer from './MainContainer';
import Slack from './Slack';
function Home() {
  return <div> Home</div>;
}
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
