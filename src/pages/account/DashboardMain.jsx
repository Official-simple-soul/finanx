import { useState, createContext, useEffect } from 'react';
import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import Header from './components/Header';
import Deposit from './Deposit';
import Home from './Home';
import Transfer from './Transfer';
import { linkObj } from './links';
import Settings from './Settings';
import HomeHeader from './components/HomeHeader';
import { useGlobalStore } from '../../store/Context';
import Loader from './components/ui/Loader';
import Transactions from './Transactions';
import { IoHelp } from 'react-icons/io5';
import { FaTelegram, FaWhatsappSquare } from 'react-icons/fa';

export const LinksContext = createContext();
export const renderItem = {
  home: { component: <Home />, header: <HomeHeader /> },
  deposit: { component: <Deposit />, header: <Header type="deposit" /> },
  transfer: { component: <Transfer />, header: <Header type="transfer" /> },
  settings: { component: <Settings />, header: <Header type="settings" /> },
  transactions: {
    component: <Transactions />,
    header: <Header type="transactions" />,
  },
};

function DashboardMain() {
  const { page, loader, setLoader, userDetail } = useGlobalStore();
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, [page]);

  return (
    <LinksContext.Provider value={linkObj}>
      {renderItem[page]?.header}
      <main className="lg:grid lg:grid-cols-[24%_50%_24%] mx-auto pt-[3.5rem] gap-[1%] bg-[#EDEDF5]">
        <AsideLeft />
        <div className="min-h-screen pb-20 mx-3">
          {renderItem[page]?.component}
        </div>
        <AsideRight />
      </main>
      {loader ? <Loader /> : null}
      <div
        onClick={() => setShowHelp(!showHelp)}
        className={`cursor-pointer sticky bottom-20 flex space-x-5 shadow-md items-center justify-center ${showHelp ? 'w-40' : 'w-14 overflow-hidden'
          } transition-all ease-in-out duration-300 h-14 rounded-full bg-[#045385] text-white mt-4 ml-4`}
      >
        <div className="flex flex-col items-center justify-center">
          <IoHelp />
          <p className="text-[10px]">Support</p>
        </div>

        {showHelp ? (
          <div className="flex items-center space-x-6">
            <a
              href="http://wa.me/2348139781147?text=Hello! I need your support"
              target="_blank"
            >
              <FaWhatsappSquare className="text-3xl" />
            </a>
            <a href="https://t.me/sherif" target="_blank">
              <FaTelegram className="text-3xl" />
            </a>
          </div>
        ) : null}
      </div>
    </LinksContext.Provider>
  );
}

export default DashboardMain;
