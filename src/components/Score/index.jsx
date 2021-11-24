import React from 'react';
import Scoreboard from './styles';
import AppContext from '../../context/AppContext';

const Score = () => {
  const { userScore, cpuScore } = React.useContext(AppContext);

  return (
    <Scoreboard>
      <h1> Marcador </h1>
      <p> {`${userScore} - ${cpuScore}`}</p>
    </Scoreboard>
  );
};

export default Score;
