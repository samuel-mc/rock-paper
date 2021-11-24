import React from 'react';
import { GiPaper, GiRock, GiScissors } from 'react-icons/gi';
import OptionSelected from './styles';

const ChoiceUser = ({ choiceUser }) => {
  const ICON_SIZE = '200px';

  return (
    <OptionSelected>
      {choiceUser === 0 ? (
        <GiRock size={ICON_SIZE} />
      ) : choiceUser === 1 ? (
        <GiPaper size={ICON_SIZE} />
      ) : (
        choiceUser !== -1 && <GiScissors size={ICON_SIZE} />
      )}
    </OptionSelected>
  );
};

export default ChoiceUser;
