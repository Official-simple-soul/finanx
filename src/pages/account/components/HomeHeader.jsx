import { FaBell, FaRegUserCircle } from 'react-icons/fa';
import { useGlobalStore } from '../../../store/Context';
import { useGetUser } from '../../service';
import { auth } from '../../../../firebase';

function HomeHeader({ children }) {
  const { page, setPage, setLoader } = useGlobalStore();
  const { data: user } = useGetUser(auth?.currentUser?.uid)
  const homeHeader = [
    {
      name: 'Quick Transfer',
      route: 'transfer',
    },
    {
      name: 'Account Home',
      route: 'home',
    },
    {
      name: 'Account Settings',
      route: 'settings',
    },
  ];

  const handlePageChange = (route) => {
    if (page === route) {
      return;
    }
    setLoader(true);
    setPage(route.toLowerCase());
  };

  return (
    <header className="fixed top-0 w-full right-0 left-0 z-10 bg-pri">
      <div className="flex justify-between px-5 text-[17px]  mx-auto py-4">
        <div
          className="font-bold text-lg flex gap-2 items-center"
          style={{ fontSize: '24px', letterSpacing: '1px' }}
          onClick={() => handlePageChange('home')}
        >
          <img src="/finanx.webp" alt="" className='h-6 w-auto rounded-md' />  <h1 className="text-xl font-bold text-white rubik">FinanX</h1>
        </div>

        <ul className="lg:flex items-center space-x-4 text-lg text-white hidden">
          {homeHeader.map((nav) => (
            <li
              key={nav.name}
              className="cursor-pointer"
              onClick={() => handlePageChange(nav.route)}
            >
              {nav.name}
            </li>
          ))}
        </ul>
        <div className="text-white flex items-center space-x-4 text-2xl">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => handlePageChange('settings')}
          >
            <span className='text-base'>Hi, {user?.fullName?.split(' ')[0]}</span>
            <FaRegUserCircle className="text-3xl" />
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}

export default HomeHeader;
