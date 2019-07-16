import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Button from 'components/Button/Button';
// eslint-disable-next-line import/no-unresolved
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
