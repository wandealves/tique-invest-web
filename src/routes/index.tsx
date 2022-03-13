import {Routes,Route,Navigate} from 'react-router-dom';

import {Private} from 'shared/layouts';

import {Login,Home} from 'pages';

export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path='/' element={<Private component={Home}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  );
};
