import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const big = () => <Heading big>Header</Heading>;

export const normal = () => <Heading>Header</Heading>;
