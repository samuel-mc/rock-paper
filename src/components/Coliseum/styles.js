import styled from 'styled-components';

const ColiseumContainer = styled.div `
  align-items: center;
  background-color: var(--light-color);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 2fr 0.5fr 2fr;
  height: 220px;
  justify-items: center;

  @media (min-width: 320px) {
    & {
      margin: 12px 24px;
      width: calc(100vw - 48px);
    }
    & h2 {
      font-size: 5rem;
    }
  }

  @media (min-width: 768px) {
    & {
      margin: 12px 60px;
      width: calc(100vw - 150px);
    }
    & h2 {
      font-size: 10rem;
    }
  }
`;

export default ColiseumContainer;