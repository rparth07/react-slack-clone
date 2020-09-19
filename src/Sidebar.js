import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div className="Avatar">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg"
              height="25"
            />
          </div>
          <div> Ronald</div>
          <div
            style={{ marginLeft: 10, marginTop: 2, cursor: 'pointer' }}
            //onClick={signOut}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2150/2150480.svg"
              height="25"
            />
          </div>
        </div>
        <hr className="sidebar-space" />
        <div className="channels">channels</div>
      </div>
    );
  }
}

export default Sidebar;
