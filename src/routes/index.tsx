import {Routes,Route,Navigate} from 'react-router-dom';

import {Login,Home} from 'pages';

export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  );
};
