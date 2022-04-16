import React from 'react';
import ReactDOM from 'react-dom';

import { MenuProvider } from 'shared/contexts';

import { GlobalStyles } from './styles/GlobalStyles';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
