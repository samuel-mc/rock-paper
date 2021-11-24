import styled from 'styled-components';

const Modal = styled.section `
  align-items: center;
  animation: fadeInModal 0.5s ease-in-out;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  left: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  & h1 {
    animation: textAnimation 2s ease-in-out infinite;
    color: var(--light-color);
    font-size: 5rem;
    margin-bottom: 20px;
  }

  @keyframes fadeInModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes textAnimation {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`;

export default Modal;