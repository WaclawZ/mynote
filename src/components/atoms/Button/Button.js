import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
  width: ${({ width }) => width || '220px'};
  height: 4.7rem;
  border: none;
  border-radius: 5rem;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 0.5rem;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
    `}
`;

export default Button;
