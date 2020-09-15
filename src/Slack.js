import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

class Slack extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div>
            Image
            <img />
          </div>
          <div>Ronald</div>
        </div>
        <div className="user-channels"></div>
      </div>
    );
  }
}

export default Slack;
