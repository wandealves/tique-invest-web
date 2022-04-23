import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import _ from 'lodash';

import { useMenuContext, Menu } from 'shared/contexts';

import * as S from './styles';

export const Header: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const { menus, toggleItem } = useMenuContext();
  const navigate = useNavigate();

  const handleAction = (menu: Menu) => {
    toggleItem(menu.id, menus);

    navigate(menu.to);
  };

  return (
    <S.Menu>
      <S.Logo />
      <S.Items>
        {menus &&
          menus.map((menu) => (
            <S.Item
              key={menu.id}
              backgroundColor={menu.backgroundColor}
              size={_.size(menus)}
              className={menu.active ? 'active-menu' : ''}
              onClick={() => handleAction(menu)}
            >
              {menu.label}
            </S.Item>
          ))}
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
