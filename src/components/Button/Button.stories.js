import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => <Button>Primary button</Button>;

export const secondary = () => <Button secondary>Secondary button</Button>;
