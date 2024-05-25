import { createContext, useContext, useReducer, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = usestate(null);
  const [IsLoading, setIsLoading] = usestate(false);
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
