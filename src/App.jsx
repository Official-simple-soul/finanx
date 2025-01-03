import './App.css';
import Footer, { FooterTwo } from './components/Footer';
import NavBar from './components/NavBar';
import NavBarTwo from './components/NavBarTwo';
import Home from './pages/Home';
import AppRouter from './routes/router';

function App() {
  return (
    <>
      <NavBar />
      <NavBarTwo />
      <AppRouter />
      <Footer />
      <FooterTwo />
    </>
  );
}

export default App;
