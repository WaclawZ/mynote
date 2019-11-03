import React from 'react';
import styled from 'styled-components';
import plusIcon from 'assets/icons/plus.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 50rem;
  background: ${({ theme }) => theme.primary};
`;

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

export const bulb = () => (
  <YellowBackground>
    <ButtonIcon icon={bulbIcon} />
  </YellowBackground>
);

export const bulbActive = () => (
  <YellowBackground>
    <ButtonIcon active icon={bulbIcon} />
  </YellowBackground>
);

export const logout = () => (
  <YellowBackground>
    <ButtonIcon icon={logoutIcon} />
  </YellowBackground>
);

export const pen = () => (
  <YellowBackground>
    <ButtonIcon icon={penIcon} />
  </YellowBackground>
);

export const plus = () => (
  <YellowBackground>
    <ButtonIcon icon={plusIcon} />
  </YellowBackground>
);

export const twitter = () => (
  <YellowBackground>
    <ButtonIcon icon={twitterIcon} />
  </YellowBackground>
);
