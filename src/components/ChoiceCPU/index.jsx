import React from 'react';
import { GiPaper, GiRock, GiScissors } from 'react-icons/gi';
import OptionSelected from './styles';

const ChoiceCPU = ({ choiceCPU }) => {
  const ICON_SIZE = window.matchMedia('(min-width: 720px)').matches
    ? '200px'
    : '100px';

  return (
    <OptionSelected>
      {choiceCPU === 0 ? (
        <GiRock size={ICON_SIZE} />
      ) : choiceCPU === 1 ? (
        <GiPaper size={ICON_SIZE} />
      ) : (
        choiceCPU !== -1 && <GiScissors size={ICON_SIZE} />
      )}
    </OptionSelected>
  );
};

export default ChoiceCPU;
