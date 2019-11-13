import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const normal = () => <Input placeholder="Input some value"></Input>;

export const search = () => <Input search placeholder="Search"></Input>;
