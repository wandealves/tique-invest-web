import React from 'react';

import * as S from './styles';

export const Toolbar: React.FC = () => {
  return (
    <S.Container>
      <input placeholder="Pesquisar" />
      <button>Novo</button>
    </S.Container>
  );
};
