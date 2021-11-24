import React from 'react';
import { GiPaper, GiRock, GiScissors } from 'react-icons/gi';
import { OptionsContainer, OptionsTitle } from './styles';
import Option from '../Option';

const Options = () => {
  const ICON_SIZE = '52px';

  return (
    <>
      <OptionsTitle>
        <h1>Elige</h1>
      </OptionsTitle>
      <OptionsContainer>
        <Option option={0}>
          <h2>Piedra</h2>
          <GiRock size={ICON_SIZE} />
        </Option>

        <Option option={1}>
          <h2>Papel</h2>
          <GiPaper size={ICON_SIZE} />
        </Option>

        <Option option={2}>
          <h2>Tijeras</h2>
          <GiScissors size={ICON_SIZE} />
        </Option>
      </OptionsContainer>
    </>
  );
};

export default Options;
