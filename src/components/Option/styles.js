import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--secondary-color);
  border: none;
  border-radius: 20px 40px;
  color: var(--light-color);
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    cursor: pointer;
  }

  & svg {
    transition: transform 0.8s ease-in-out;
  }

  &:hover svg {
    transform: rotate(-45deg);
    transition: transform 0.4s ease-in-out;
  }
`;

export default Button;
