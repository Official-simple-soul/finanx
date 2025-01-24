import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [userToken, setUserToken] = useState(token);
  const [userProfile, setUserProfile] = useState({});

  return (
    <AppContext.Provider
      value={{ userToken, setUserToken, userProfile, setUserProfile }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
