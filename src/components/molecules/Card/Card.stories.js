import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const primary = () => <Card activeColor="primary"></Card>;
export const secondary = () => <Card activeColor="secondary"></Card>;
export const tertiary = () => <Card activeColor="tertiary"></Card>;
