import React from 'react';
import { Navigate } from 'react-router-dom';

import {Header} from 'shared/components/Header';

import { UserService } from 'shared/services';

//import { MainNavigation, Sidenav } from 'shared/components'

import * as S from './styles';

interface Props {
  component: React.ComponentType
  path?: string
}

export const Private: React.FC<Props> = ({
  component: RouteComponent
}) => {
  const service = new UserService();

  return service.isAuthenticated() ? (
    <S.Container>
      <Header/>
      <S.Content>
        <RouteComponent />
      </S.Content>
    </S.Container>
  ) : (
    <Navigate to="/login" />
  );
};
