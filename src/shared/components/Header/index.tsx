import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useMenuContext } from 'shared/contexts';

import * as S from './styles';

export const Header: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const { menus, toggleItem } = useMenuContext();

  return (
    <S.Menu>
      <S.Logo />
      <S.Items>
        {menus &&
          menus.map((menu) =>
            menu.isButton ? (
              <button key={menu.id} className="button-exit">
                {menu.label}
              </button>
            ) : (
              <S.Item
                key={menu.id}
                to={menu.to}
                className={menu.active ? 'active-menu' : ''}
                onClick={() => toggleItem(menu.id, menus)}
              >
                {menu.label}
              </S.Item>
            )
          )}
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
