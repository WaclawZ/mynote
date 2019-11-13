import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 38rem;
  box-shadow: 0 1rem 3rem -1rem hsla(0, 0%, 0%, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 1.7rem 3rem 1rem;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 99999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 0.5rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 0.5rem 0 0;
`;

const StyledAvatar = styled.img`
  width: 8.6rem;
  height: 8.6rem;
  border: 0.5rem solid ${({ theme }) => theme.twitter};
  border-radius: 5rem;
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 4.7rem;
  height: 4.7rem;
  border-radius: 5rem;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello world</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/hello_roman" />}
      {cardType === 'article' && <StyledLinkButton href="https://google.com" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Amet consectetur ea sunt Lorem qui velit nostrud nulla veniam pariatur est. Nulla eiusmod
        aliquip mollit elit cillum qui excepteur ut minim culpa et. Consectetur sint cillum nisi
        duis.
      </Paragraph>
      <Button secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
