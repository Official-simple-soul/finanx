import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [userToken, setUserToken] = useState(token);

  return (
    <AppContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
