import styled from 'styled-components';

const Modal = styled.div `
  align-items: center;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  width: 100vw;

  & h1 {
    color: var(--light-color);
    font-size: 4rem;
    margin: 12px;
  }

  & h2 {
    color: var(--light-color);
    opacity: 0.9;
    font-size: 2rem;
    margin: 12px;
  }
`;

export default Modal;