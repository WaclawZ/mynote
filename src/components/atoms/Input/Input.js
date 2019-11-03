import styled from 'styled-components';

const Input = styled.input`
  padding: 1.5rem 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 5rem;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.grey300};
  }
`;

export default Input;
