import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello world</h1>
    <Button width="150px">Close / Save</Button>
    <br />
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
