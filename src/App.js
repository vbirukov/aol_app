import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {BaseStyles, Box, Heading} from '@primer/components';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <BaseStyles>
        <Box m={4}>
          <Heading mb={2}>Hello, world!</Heading>
          <p>This will get Primer text styles.</p>
        </Box>
      </BaseStyles>

    <AmplifySignOut />

    </div>
  );
}

export default withAuthenticator(App);
