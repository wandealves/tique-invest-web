import React from 'react';
import {useNavigate} from 'react-router-dom';
import { TextField,Button } from '@mui/material';

import {UserService} from 'shared/services';

import * as S from './styles';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async() =>{
    const userService = new UserService();

    await userService.authenticate('','');

    navigate('/');
  };

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
            <Button variant="contained" onClick={handleLogin}>Entrar</Button>
          </div>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
