import React from 'react';
import Modal from './styles';
import ModalButton from '../ModalButton';

const WinnerModal = ({ winner, resetGame }) => (
  <Modal>
    {winner === 'user' ? <h1>¡Ganaste!</h1> : <h1>¡Perdiste!</h1>}
    <ModalButton action={() => resetGame()} content="Jugar de nuevo" />
  </Modal>
);

export default WinnerModal;
