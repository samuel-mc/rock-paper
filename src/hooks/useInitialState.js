import React from 'react';

const useInitialState = () => {
  const [userScore, setUserScore] = React.useState(0);
  const [cpuScore, setCPUScore] = React.useState(0);

  const [choiceUser, setChoiceUser] = React.useState(-1);
  const [choiceCPU, setChoiceCPU] = React.useState(-1);

  const [winner, setWinner] = React.useState('');

  return {
    userScore,
    setUserScore,
    cpuScore,
    setCPUScore,

    choiceUser,
    setChoiceUser,
    choiceCPU,
    setChoiceCPU,

    winner,
    setWinner,
  };
};

export default useInitialState;