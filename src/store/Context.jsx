import { useContext, createContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const store = createContext();

// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const [page, setPage] = useState('home');
  const [loader, setLoader] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [switchKey, setSwitchKey] = useState(1);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const docRef = doc(db, 'users', `${currentUser.uid}`);

      const unsubscribe = onSnapshot(docRef, (doc) => {
        setUserDetail(doc.data());
      });

      return () => unsubscribe();
    }
  }, [db, auth?.currentUser]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, 'users', `${uid}`);

        const unsubscribe = onSnapshot(docRef, (doc) => {
          setUserDetail(doc.data());
        });

        return () => unsubscribe();
      } else {
        setUserDetail({});
      }
    });
  }, [db, auth]);

  return (
    <store.Provider
      value={{
        page,
        setPage,
        loader,
        setLoader,
        userDetail,
        setUserDetail,
        currentUser,
        setCurrentUser,
        switchKey,
        setSwitchKey,
      }}
    >
      {children}
    </store.Provider>
  );
};

const useGlobalStore = () => {
  return useContext(store);
};

export { useGlobalStore, StoreProvider };
