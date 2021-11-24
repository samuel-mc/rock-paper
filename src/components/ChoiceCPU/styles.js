import styled from 'styled-components';

const OptionSelected = styled.div`
  & svg {
    animation: fadeIn 0.4s ease-in-out;
    transform: scaleX(-1);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9) rotate(-45deg);
    }

    50% {
      opacity: 0.1;
      transform: rotate(45deg);
    }

    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }
`;

export default OptionSelected;
