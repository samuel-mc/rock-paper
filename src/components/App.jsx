import React from 'react';

import Options from './Options';
import Coliseum from './Coliseum';
import ChoiceCPU from './ChoiceCPU';
import ChoiceUser from './ChoiceUser';
import Score from './Score';
import WinnerModal from './WinnerModal';
import InitialModal from './InitialModal';
import GlobalStyles from './GlobalStyles';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  const [showInitialModal, setShowInitialModal] = React.useState(true);
  const [rounds, setRounds] = React.useState(0);
  const {
    userScore,
    setUserScore,
    cpuScore,
    setCPUScore,
    winner,
    setWinner,
    choiceUser,
    setChoiceUser,
    choiceCPU,
    setChoiceCPU,
  } = initialState;

  const resetGame = () => {
    setRounds(0);
    setUserScore(0);
    setCPUScore(0);
    setChoiceCPU(-1);
    setChoiceUser(-1);
    setWinner(null);
    setShowInitialModal(true);
  };

  const handleSetWinner = (name) => {
    setTimeout(() => {
      setWinner(name);
    }, 500);
  };

  React.useEffect(() => {
    let max = 0;
    if (rounds === 1) {
      max = 1;
    } else if (rounds === 3) {
      max = 2;
    } else {
      max = 3;
    }

    if (userScore === max || cpuScore === max) {
      setTimeout(() => {
        handleSetWinner(userScore === max ? 'user' : 'cpu');
      }, 500);
    }
  }, [userScore, cpuScore]);

  return (
    <main className="main">
      {winner && <WinnerModal winner={winner} resetGame={resetGame} />}
      {showInitialModal && (
        <InitialModal
          setShowInitialModal={setShowInitialModal}
          setRounds={setRounds}
        />
      )}
      <AppContext.Provider value={initialState}>
        <GlobalStyles />
        <Options />
        <Coliseum>
          <ChoiceUser choiceUser={choiceUser} />
          {choiceUser !== -1 && <h2>VS</h2>}
          <ChoiceCPU choiceCPU={choiceCPU} />
        </Coliseum>
        <Score />
      </AppContext.Provider>
    </main>
  );
};

export default App;
