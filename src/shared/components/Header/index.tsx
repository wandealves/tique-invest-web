import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import * as S from './styles';

export const Header: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <S.Menu>
      <S.Logo />
      <S.Items>
        <S.Item to="/">Dashboard</S.Item>
        <S.Item to="/">Investimentos</S.Item>
        <S.Item to="/">Proventos</S.Item>
        <S.Item to="/">Perfil</S.Item>
        <button className='button-exit'>Sair</button>
      </S.Items>
      <S.MobileMenu>
        {mobile ? (
          <FaTimes onClick={() => setMobile(false)} />
        ) : (
          <FaBars onClick={() => setMobile(true)} />
        )}

        <S.MobileMenuItem mobile={mobile}>
          <div className="menu-item">Dashboard</div>
          <div className="menu-item">Investimentos</div>
          <div className="menu-item">Proventos</div>
          <div className="menu-item">Perfil</div>
          <div className="menu-item">Sair</div>
        </S.MobileMenuItem>
      </S.MobileMenu>
    </S.Menu>
  );
};
