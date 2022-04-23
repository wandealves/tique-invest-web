import React, { createContext, useCallback, useContext, useState } from 'react';
import _ from 'lodash';

export type Menu = {
  id: number
  label: string
  to: string
  backgroundColor: string
  active: boolean
  isButton: boolean
}

interface IMenuContextData {
  menus: Menu[]
  buildMenus: (menus: Menu[]) => void
  toggleItem: (id: number, menus: Menu[]) => void
}

const MenuContext = createContext({} as IMenuContextData);

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export const MenuProvider: React.FC = ({ children }) => {
  const [menus, setMenus] = useState<Menu[]>([]);

  const buildMenus = useCallback((menus: Menu[]) => {
    setMenus(menus);
  }, []);

  const toggleItem = useCallback((id: number, menus: Menu[]) => {
    const item = _.find(menus, (menu) => menu.id === id);
    const itemActive = _.find(menus, (menu) => menu.active);

    if (item) {
      item.active = !item.active;
      if (itemActive) itemActive.active = false;

      setMenus([...menus]);
    }
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menus,
        buildMenus,
        toggleItem
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
