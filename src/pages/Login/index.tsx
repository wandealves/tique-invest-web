import React from 'react';
import { TextField,Button } from '@mui/material';

import * as S from './styles';

export const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Logo/>
      <S.Content>
        <S.Title>Login</S.Title>
        <S.Form
        >
          <TextField className='txt-login' label="E-mail" variant="outlined" />
          <TextField className='txt-login' type="password" label="Senha" variant="outlined" />
          <TextField className='txt-login' type="password" label="Confirmar Senha" variant="outlined" />
          <div className='wrapper-button'>
            <Button variant="contained">Entrar</Button>
          </div>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
