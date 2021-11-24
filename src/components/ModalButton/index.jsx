import React from 'react';
import Button from './styles';

const ModalButton = ({ content, action }) => (
  <Button onClick={action}>{content}</Button>
);

export default ModalButton;
