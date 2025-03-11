import { useState } from 'react';
import { auth } from '../../../../firebase';
import { signOut } from 'firebase/auth';
import { asideLeftTopData } from '../accountData';
import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import { BsBank, BsDoorClosed, BsGear } from 'react-icons/bs';
import { useGlobalStore } from '../../../store/Context';
import { useApp } from '../../../context/AppStore';
import { useGetUser } from '../../service';
import { IoArrowDownCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

function AsideLeft() {
  const { page, setPage, setLoader } = useGlobalStore();
  const { setUserToken } = useApp()
  const { data: user } = useGetUser(auth?.currentUser?.uid)
  const [active, setActive] = useState(0);

  const primaryNavContent = [
    { textContent: 'Dashboard', icon: <FaHome />, route: 'home' },
    { textContent: 'Settings', icon: <BsGear />, route: 'settings' },
    { textContent: 'Deposit', icon: <IoArrowForwardCircleOutline />, route: 'deposit' },
    { textContent: 'Transfer', icon: <IoArrowDownCircleOutline />, route: 'transfer' },
    { textContent: 'Transactions', icon: <BsBank />, route: 'transactions' },
  ];
  const route = useNavigate()
  const signOutAuth = () => {
    signOut(auth);
    route('/login', { replace: true })
    sessionStorage.removeItem('token');
    setUserToken(null);
  };

  const handlePageChange = ({ route }, i) => {
    if (page === route) {
      return;
    }
    setActive(i);
    setLoader(true);
    setPage(route.toLowerCase());
  };

  return (
    <>
      <aside className="sticky top-0 h-screen pt-10 hidden lg:block bg-white px-1">
        <div className="user flex items-center gap-4 p-4">
          <div className="">

            <FaRegUserCircle className="text-3xl" />

          </div>
          <div className="">
            <p>{user?.fullName.split(' ')[0]}</p>
            <p className="text-neutral text-[12px]">
              {'Account Type: Tier 1'}
            </p>
          </div>
        </div>
        <nav>
          <div className="quick_access flex flex-col ">
            <div className="flex flex-row justify-between p-4 bg-pri">
              {asideLeftTopData.map((n, i) => (
                <div key={i} className="text-center w-fit text-[12px]">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div
                      className="text-lg flex w-10 h-10 justify-center items-center bg-[#045385] rounded-full text-white cursor-pointer"
                      onClick={() => handlePageChange(n)}
                    >
                      {n.icon}
                    </div>
                    <p className="text-[#B7D7EC] text-thin text-[11px]">
                      {n.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="primary_nav flex flex-col px-6">
              <ul>
                {primaryNavContent
                  .map((n, i) => (
                    <li
                      key={i}
                      className="border-b text-pri cursor-pointer"
                      onClick={() => handlePageChange(n)}
                    >
                      <div className="flex items-center space-x-3 py-4 text-lg">
                        <div className="text-3xl">{n.icon}</div>
                        <p>{n.textContent}</p>
                      </div>
                    </li>
                  ))}
                <li
                  className="border-b text-pri cursor-pointer"
                  onClick={signOutAuth}
                >
                  <div className="flex items-center space-x-3 py-4 text-lg">
                    <div className="text-3xl">
                      <BsDoorClosed />
                    </div>
                    <p>{'Log Out'}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>
      <footer className="fixed w-full bottom-0 bg-white border-t lg:hidden z-50">
        <div
          className={`grid grid-cols-5
          justify-between items-center px-4`}
        >
          {primaryNavContent
            .map((e, i) => (
              <div
                key={i}
                onClick={() => handlePageChange(e, i)}
                className={`flex flex-col items-center justify-center py-2 text-lg ${active === i ? 'border-t-2 border-pri' : ''
                  }`}
              >
                <div className="text-xl text-pri">{e.icon}</div>
                <p className="text-[10px]">{e.textContent}</p>
              </div>
            ))}
        </div>
      </footer>
    </>
  );
}

export default AsideLeft;
