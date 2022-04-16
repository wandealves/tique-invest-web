import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useMenuContext } from 'shared/contexts';

import { Private } from 'shared/layouts';

import { Login, Home, Investments } from 'pages';

export const AppRoutes = () => {
  const { buildMenus } = useMenuContext();
  useEffect(() => {
    buildMenus([
      {
        id: 1,
        label: 'Dashboard',
        to: '/',
        active: true,
        isButton: false
      },
      {
        id: 2,
        label: 'Investimentos',
        to: '/investimentos',
        active: false,
        isButton: false
      },
      {
        id: 3,
        label: 'Proventos',
        to: '/',
        active: false,
        isButton: false
      },
      {
        id: 4,
        label: 'Perfil',
        to: '/',
        active: false,
        isButton: false
      },
      {
        id: 5,
        label: 'Sair',
        to: 'sair',
        active: false,
        isButton: true
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Private component={Home} />} />
      <Route
        path="/investimentos"
        element={<Private component={Investments} />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
