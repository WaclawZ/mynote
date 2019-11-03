import React from 'react';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

export const normal = () => <ButtonIcon icon={plusIcon}></ButtonIcon>;
