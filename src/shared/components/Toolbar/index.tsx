import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

type Props = {
  toNew: string
}

export const Toolbar: React.FC<Props> = ({ toNew }) => {
  const navigate = useNavigate();

  const handleTo = (to: string) => {
    navigate(to);
  };

  return (
    <S.Container>
      <input placeholder="Pesquisar" />
      <button onClick={() => handleTo(toNew)}>Novo</button>
    </S.Container>
  );
};
