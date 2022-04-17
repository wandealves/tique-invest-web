import React from 'react';

import {Toolbar,DataTable} from 'shared/components';

import * as S from './styles';

export const Investments: React.FC = () => {
  return (
    <S.Container>
      <Toolbar/>
      <DataTable/>
    </S.Container>
  );
};
