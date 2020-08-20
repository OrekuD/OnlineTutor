import React, { createContext, useState, useContext, ReactNode } from "react";
import { AppContext } from "../types";

const Context = createContext<AppContext>({
  tabBarVisible: true,
  setTabBarState: () => {},
});

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  const [tabBarVisible, setTabBarVisible] = useState<boolean>(true);
  const setTabBarState = (state: boolean) => {
    setTabBarVisible(state);
  };

  const value: AppContext = {
    tabBarVisible,
    setTabBarState,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
