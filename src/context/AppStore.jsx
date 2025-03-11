import { createContext, useContext, useState } from 'react';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [userToken, setUserToken] = useState(token);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        return null;
      }

      const docRef = doc(db, 'users', currentUser.uid);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
          return docSnap.data();
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
    };
    fetchProfile();
  }, [auth]);

  return (
    <AppContext.Provider
      value={{ userToken, setUserToken, userProfile, setUserProfile }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
