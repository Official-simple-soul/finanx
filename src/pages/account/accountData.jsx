import {
  IoArrowDownCircleOutline,
  IoArrowForwardCircleOutline,
  IoCashOutline,
} from 'react-icons/io5';
import { BsBank, BsCreditCard2Back } from 'react-icons/bs';
import { RiDraftLine } from 'react-icons/ri';
import {
  MdMailOutline,
  MdOutlineCurrencyExchange,
  MdOutlineQuickreply,
} from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';

export const homeOptions = [
  {
    name: 'Transfer',
    icon: <IoArrowDownCircleOutline />,
    color: '#FF396F',
    route: 'transfer',
  },
  {
    name: 'Deposit',
    icon: <IoArrowForwardCircleOutline />,
    color: '#0076BE',
    route: 'deposit',
  },
  {
    name: 'Cards',
    icon: <BsCreditCard2Back />,
    color: '#1DCC70',
    route: 'card',
  },
  {
    name: 'Withdraw',
    icon: <IoCashOutline />,
    color: '#006B56',
    route: 'transfer',
  },
  {
    name: 'Quick Loans',
    icon: <MdOutlineQuickreply />,
    color: '',
    route: 'loan',
  },
  {
    name: 'Messages',
    icon: <MdMailOutline />,
    color: '',
    route: 'notifications',
  },
  {
    name: 'Statement',
    icon: <RiDraftLine />,
    color: '',
    route: 'statement',
  },
  {
    name: 'Transactions',
    icon: <BsBank />,
    color: '',
    route: 'transactions',
  },
];

export const asideLeftTopData = [
  {
    name: 'Deposit',
    icon: <IoArrowDownCircleOutline />,
    color: '#FF396F',
    route: 'deposit',
  },
  {
    name: 'Withdraw',
    icon: <IoArrowForwardCircleOutline />,
    color: '#0076BE',
    route: 'transfer',
  },
  {
    name: 'Transfer',
    icon: <IoArrowDownCircleOutline />,
    color: '#FF396F',
    route: 'transfer',
  },
  {
    name: 'Transactions',
    icon: <BsBank />,
    color: '',
    route: 'transactions',
  },
];

export const asideLeftBottomData = [
  {
    name: 'Home',
    icon: <IoArrowDownCircleOutline />,
    color: '#FF396F',
    route: 'home',
  },
  {
    name: 'Swap',
    icon: <IoArrowForwardCircleOutline />,
    color: '#0076BE',
    route: 'swap',
  },
  {
    name: 'Loans',
    icon: <BsCreditCard2Back />,
    color: '#1DCC70',
    route: 'loan',
  },
  {
    name: 'My Cards',
    icon: <MdOutlineCurrencyExchange />,
    color: '#FFB400',
    route: 'card',
  },
  {
    name: 'Admin',
    icon: <RiAdminFill />,
    color: '#FFB400',
    route: 'admin',
  },
  {
    name: 'Settings',
    icon: <MdOutlineCurrencyExchange />,
    color: '#FFB400',
    route: 'settings',
  },
];
