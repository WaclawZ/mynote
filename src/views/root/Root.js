import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello world</h1>
    <Button>Close / Save</Button>
    <br />
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
