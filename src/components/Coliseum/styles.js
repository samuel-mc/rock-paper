import styled from 'styled-components';

const ColiseumContainer = styled.section`
  align-items: center;
  background-color: var(--light-color);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 2fr 0.5fr 2fr;
  height: 220px;
  justify-items: center;
  margin: 12px 60px;

  & h2 {
    font-size: 10rem;
  }
`;

export default ColiseumContainer;
