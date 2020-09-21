import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from './firebase';

function Sidebar(props) {
  //const [channels, setChannels] = useState([]);
  const { channels } = props;
  return (
    <div id="sidebar">
      <div className="user-profile">
        <div className="avatar">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg"
            alt="pic"
          />
        </div>
        <div>Ronald</div>
        <div
          style={{ marginLeft: 10, marginTop: 2, cursor: 'pointer' }}
          onClick={signOut}
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2150/2150480.svg"
            alt="pic"
            height="25"
          />
        </div>
      </div>
      <hr className="sidebar-spacer" />

      <div className="channels">
        <div className="header">Channels</div>

        <ul className="channels-list">
          {channels.map((channel) => (
            <li key={channel.id}>
              <Link to={`/?id=${channel.id}`}>#{channel.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
