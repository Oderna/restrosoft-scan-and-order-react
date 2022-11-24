import React from 'react';
const MenuItemContext = React.createContext(null);
const useMenuItem = () => React.useContext(MenuItemContext);
const MenuItemProvider = ({ value, children }: {value: any, children: any}) => {
  return (
    <MenuItemContext.Provider value={value}>
      {children}
    </MenuItemContext.Provider>
  );
};

export { MenuItemProvider, useMenuItem };