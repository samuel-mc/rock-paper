import React from 'react';
import ModalButton from '../ModalButton';
import Modal from './styles';

const InitialModal = ({ setRounds, setShowInitialModal }) => {
  const handleClick = (rounds) => {
    setRounds(rounds);
    setShowInitialModal(false);
  };

  return (
    <Modal>
      <h1>Piedra, Papel O Tijera</h1>
      <h2>Selecciona Los Rounds</h2>
      <div>
        <ModalButton action={() => handleClick(1)} content="1 Round" />
        <ModalButton action={() => handleClick(3)} content="3 Rounds" />
        <ModalButton action={() => handleClick(5)} content="5 Rounds" />
      </div>
    </Modal>
  );
};

export default InitialModal;
