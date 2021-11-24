import React from 'react';
import ColiseumContainer from './styles';

const Coliseum = ({ children }) => (
  <section>
    <ColiseumContainer>{children}</ColiseumContainer>
  </section>
);

export default Coliseum;
