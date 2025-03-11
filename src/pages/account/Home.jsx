
import { homeOptions } from './accountData';
import { useGlobalStore } from '../../store/Context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import 'react-tooltip/dist/react-tooltip.css';
import { useGetUser } from '../service';
import { notifications } from '@mantine/notifications';
import { auth } from '../../../firebase';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaGift } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import { expected } from '../../../utils/constants';

function Home() {
  const { setPage, setLoader } = useGlobalStore();
  const { data: user } = useGetUser(auth.currentUser.uid)
  const [open, setOpen] = useState(true)
  const [opened, setOpened] = useState(true)

  const handlePage = ({ route }) => {
    if (['card', 'swap', 'loan', 'notifications', 'statement'].includes(route)) {
      notifications.show({
        title: 'Service unavailable',
        message: 'Service not available at the moment',
        color: 'red'
      })
      return
    }
    setLoader(true);
    setPage(route.toLowerCase());
  };
  const handlePageChange = () => {
    setLoader(true);
    setPage('transactions');
  };

  useEffect(() => {

    const check = localStorage.getItem('opened') || null;
    if (!check) {
      setOpened(false)
      localStorage.setItem('opened', true)
    }
  }, [])

  return (
    <div className="home_render mt-2">
      <div className="py-6 px-4 bg-white rounded-xl flex flex-col gap-6 z-50 mt-6 md:mt-0">
        <div className="acc md:flex justify-between border-b-2 pb-6">
          <div className="acc_balance flex-1">
            <p className="">Dollar Account</p>
            <p className="text-3xl font-bold">
              &#36; <span>{(user?.mainBalance || 0)?.toLocaleString()}</span>
            </p>
            <p className="text font-bold text-gray-500">
              Bonus Balance:  &#36; <span>{user?.balance?.toLocaleString()}</span>
            </p>
            <p className='text-xs text-gray-500'>Top up your main balance with &#36;{(expected - (user?.mainBalance || 0)).toLocaleString()} to activate your bonus</p>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-between items-center gap-y-12">
          {homeOptions.map((opt, idx) => (
            <div
              className="flex flex-col justify-center items-center space-y-2"
              key={idx}
            >
              <div
                className="w-12 h-12 rounded-xl flex flex-col justify-center items-center text-white cursor-pointer"
                style={{
                  backgroundColor: opt.color,
                  border: !opt.color && '1px solid #000',
                  color: !opt.color && '#000',
                  fontSize: '30px',
                }}
                onClick={() => handlePage(opt)}
              >
                {opt.icon}
              </div>
              <p className="text-[12px] truncate">{opt.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Slider {...settings} dots={true} className="overflow-hidden mt-16">
        <div className="">
          <img src={one} alt="" className="" />
        </div>
        <div className="">
          <img src={two} alt="" className="" />
        </div>
        <div className="">
          <img src={three} alt="" className="" />
        </div>
      </Slider>
      <div className="flex justify-between items center my-5">
        <p>Transactions</p>
        <p className="text-pri cursor-pointer" onClick={handlePageChange}>
          View All
        </p>
      </div>
      {
        !opened && <Modal
          opened={open}
          onClose={() => setOpen(false)}
          title={`Hello ${user?.fullName.split(' ')[0]}!`}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
          centered
        >
          <div className="flex">
            <div className="text-center space-y-5 w-full flex flex-col items-center">
              <FaGift className='text-8xl text-pri' />
              <p className="text-3xl font-bold">Congratulations!</p>
              <p className="text-sm">
                You have earned 35,000 coins as a reward for joining FinanX. Top up your balance to have access
              </p>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
}

export default Home;

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dot: true,

};
