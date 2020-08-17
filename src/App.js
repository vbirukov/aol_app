import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import {BaseStyles, Box, Heading} from '@primer/components';

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

    </div>
  );
}

export default App;
