import React from 'react';
import Button from './styles';
import AppContext from '../../context/AppContext';

const Option = ({ children, option }) => {
  const {
    setChoiceUser,
    setChoiceCPU,
    userScore,
    cpuScore,
    setUserScore,
    setCPUScore,
  } = React.useContext(AppContext);

  const setScore = (choice) => {
    if (choice === 0 && option === 1) {
      setUserScore(userScore + 1);
    }
    if (choice === 0 && option === 2) {
      setCPUScore(cpuScore + 1);
    }
    if (choice === 1 && option === 0) {
      setCPUScore(cpuScore + 1);
    }
    if (choice === 1 && option === 2) {
      setUserScore(userScore + 1);
    }
    if (choice === 2 && option === 0) {
      setUserScore(userScore + 1);
    }
    if (choice === 2 && option === 1) {
      setCPUScore(cpuScore + 1);
    }
  };

  const chooseOptionCPU = () => {
    const choice = Math.floor(Math.random() * 3);
    setChoiceCPU(choice);
    setScore(choice);
  };

  const handleClick = () => {
    setChoiceUser(-1);
    setChoiceCPU(-1);
    setTimeout(() => {
      setChoiceUser(option);
      chooseOptionCPU();
    }, 250);
  };

  return (
    <div>
      <Button onClick={() => handleClick()}> {children} </Button>
    </div>
  );
};

export default Option;
