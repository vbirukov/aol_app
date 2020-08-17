import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import MainMenu from "./ui/tabs";
import { withAuthenticator } from '@aws-amplify/ui-react';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
Amplify.configure(config);

function App() {

  return (
    <div className="App">
        <ReactBootstrapStyle />
        <MainMenu />
    </div>
  );
}

export default withAuthenticator(App);
