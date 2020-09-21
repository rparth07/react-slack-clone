import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
/*import SignIn from './SignIn';
import Sidebar from './Sidebar';
import Slack from './Slack';
import MainContainer from './MainContainer';*/
import Userproviders from './providers/Userproviders';

ReactDOM.render(
  <Userproviders data="">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Userproviders>,
  document.getElementById('root')
);
