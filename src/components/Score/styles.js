import styled from 'styled-components';

const Scoreboard = styled.div`
  background-color: var(--tertiary-color);
  border-radius: 8px;
  color: var(--light-color);
  margin: 12px auto;
  padding: 16px;
  text-align: center;
  width: 50%;

  & h1 {
    font-size: 3rem;
  }

  & p {
    font-size: 3.5rem;
  }
`;

export default Scoreboard;
