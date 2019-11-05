import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

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
  padding: 1.7rem 3rem 1rem;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};

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

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <StyledHeading>Hello world</StyledHeading>
      <DateInfo>3 days</DateInfo>
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

export default Card;
