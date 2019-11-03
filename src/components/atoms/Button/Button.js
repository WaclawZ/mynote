import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme, color }) => color || theme.primary};
  width: 22rem;
  height: 4.7rem;
  border: none;
  border-radius: 5rem;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  margin: 0.5rem;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
    `}
`;

export default Button;
