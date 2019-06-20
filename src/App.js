import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  border: 2px solid black;
  padding: 50px;
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton>This is my button</MyButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
