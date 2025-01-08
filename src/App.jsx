import { useState } from 'react';
import './App.css';
import Footer, { FooterTwo } from './components/Footer';
import NavBar from './components/NavBar';
import NavBarTwo from './components/NavBarTwo';
import AppRouter from './routes/router';
import { useEffect } from 'react';
import { useApp } from './context/AppStore';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const { userToken } = useApp();

  useEffect(() => {
    const token = userToken || localStorage.getItem('token');

    if (token) {
      console.log(true);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [userToken]);

  return (
    <>
      {!isAuth && (
        <>
          <NavBar />
          <NavBarTwo />
        </>
      )}
      <AppRouter />
      {!isAuth && (
        <>
          <Footer />
          <FooterTwo />
        </>
      )}
    </>
  );
}

export default App;
