import { useState } from 'react';
import { BsCheckCircle, BsPlus } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa';
import { MdKeyboardControlKey } from 'react-icons/md';
import qr from '../../assets/qr.jpeg';
import { mailTo } from '../../../utils/mailTo';
import { copyText } from '../../../utils/copyText';
import { expected } from '../../../utils/constants';
import { useGetUser } from '../service';
import { auth } from '../../../firebase';

function Deposit() {
  const [open, setOpen] = useState([]);
  const { data: user } = useGetUser(auth?.currentUser?.uid)

  const handleOpen = (num) => {
    setOpen((prev) => {
      if (prev.includes(num)) {
        return prev.filter((item) => item !== num);
      } else {
        return [num];
      }
    });
  };

  return (
    <div>
      <p className="text-sm text-pri mt-10">Your FinanX account balances</p>
      <div className="space-y-4">
        <div className="convert_from bg-white py-7 px-3 rounded-xl shadow space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[12px]">Dollar Account</span>
            <span className="text-gray-500 text-[12px]"></span>
          </div>
          {
            (user?.mainBalance || 0) < expected && <>

              <div className="flex justify-between items-center space-y-3 space-x-5">
                <p className="text-xl font-bold text-gray-500">
                  &#36; {user?.balance?.toLocaleString() || 0.0}
                </p>
                <p className="text-xl font-bold text-gray-500">USD</p>
              </div>
              <p className="text-xs text-pri">Bonus Balance. Top up your main balance with &#36;{(expected - (user?.mainBalance || 0)).toLocaleString()} to activate</p>
            </>
          }
          <div className="flex justify-between items-center space-y-3 space-x-5">
            <p className="text-3xl font-bold">
              &#36; {user?.mainBalance?.toLocaleString() || 0.0}
            </p>
            <p className="text-3xl font-bold">USD</p>
          </div>
          <p className="text-sm text-pri">Main Balance</p>
          <div className="accordion">
            <div
              className="first w-full h-10 bg-black rounded-xl flex justify-between items-center text-white px-4 text-sm cursor-pointer"
              onClick={() => handleOpen(1)}
            >
              <p>Deposit via bank transfer (Unavailable. Please use wallet transfer)</p>
              <MdKeyboardControlKey />
            </div>
            <div
              className={`${open.includes(1) ? 'h-40' : 'h-0'
                } w-full transition-all ease-in-out duration-300 overflow-hidden`}
            >
              <div className="flex items-center space-x-4 py-3 border-b">
                <p className="text-neutral text-sm">
                  Account Number -{' '}
                  <span className="text-black">Currently Unavailable</span>
                </p>
                <div className="copy flex items-center justify-center space-x-1 rounded-lg border-2 border-black text-xs p-1">
                  <FaRegCopy />
                  <p
                    className="cursor-pointer"
                    onClick={() => copyText('011987874260')}
                  >
                    Copy
                  </p>
                </div>
              </div>
              <div className="text-xs py-4">
                <div className="flex items-center space-x-3">
                  <p>Internal Transfers -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <p>External Transfers -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral">
                Please note that deposits to this account number from external
                banks are currently unavailable{' '}
                <span onClick={() => mailTo()} className="text-pri">
                  Contact Support
                </span>
              </p>
            </div>
          </div>
          <div className="accordion">
            <div
              className="first w-full h-10 bg-black rounded-xl flex justify-between items-center text-white px-4 text-sm cursor-pointer"
              onClick={() => handleOpen(2)}
            >
              <p>Deposit via wallet transfer</p>
              <MdKeyboardControlKey />
            </div>
            <div
              className={`${open.includes(2) ? 'h-auto' : 'h-0'
                } w-full transition-all ease-in-out duration-300 overflow-hidden`}
            >
              <div className="flex justify-center items-center space-x-4 py-2">
                <div className="flex items-center space-x-2 text-xs">
                  <p className="text-neutral">Currency -</p>
                  <img
                    src="https://www.swiftpayu.com//ddocs/cusdt.png"
                    alt=""
                    className="w-7 h-7"
                  />
                  <p>USDT</p>
                </div>
                <div className="flex items-center space-x-1 text-xs">
                  <p className="text-neutral">Network -</p>
                  <p>ERC20</p>
                </div>
              </div>
              <p className="my-5 text-sm text-pri text-center">
                Scan code to deposit
              </p>
              <div className="flex items-center justify-center w-full">
                <img src={qr} alt="qr" width={'30%'} />
              </div>
              <p className="my-5 text-sm text-pri text-center">
                Deposit address
              </p>
              <p className="my-5 text-neutral text-center">
                0xA3BaC29Dc409f0d14379aFfEbdCb3c4E141dCD9A
              </p>
              <div
                className="w-full bg-pri text-white py-2 hover:bg-hover cursor-pointer text-center"
                onClick={() =>
                  copyText('0xA3BaC29Dc409f0d14379aFfEbdCb3c4E141dCD9A')
                }
              >
                Copy Address
              </div>
              <div className="text-xs py-4">
                <div className="flex items-center space-x-3">
                  <p>Internal Transfers -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <p>External Transfers -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <p>External Deposit -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
              </div>
              <p className="my-2 text-xs text-neutral">
                If your deposit does not appear in your EUR balance within 24
                hours, please do not hesitate to{' '}
                <span onClick={() => mailTo()} className="text-pri">
                  contact our support team
                </span>{' '}
                for assistance
              </p>
            </div>
          </div>
        </div>
        <div className="convert_from bg-white py-7 px-3 rounded-xl shadow space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[12px]">Free Balance</span>
            <span className="text-gray-500 text-[12px]"></span>
          </div>
          <div className="flex justify-between items-center space-y-3 space-x-5">
            <p className="text-3xl font-bold">&#36; 0.00</p>
            <p className="text-3xl font-bold">EUR</p>
          </div>
          <p className="text-sm text-pri">Active</p>
          <div className="accordion">
            <div
              className="first w-full h-10 bg-black rounded-xl flex justify-between items-center text-white px-4 text-sm cursor-pointer"
              onClick={() => handleOpen(4)}
            >
              <p>Deposit via bank transfer</p>
              <MdKeyboardControlKey />
            </div>
            <div
              className={`${open.includes(4) ? 'h-auto' : 'h-0'
                } w-full transition-all ease-in-out duration-300 overflow-hidden`}
            >
              <p className="text-xs text-neutral py-2">
                Please note that deposits via bank transfer are currently
                unavailable for your account fee balance at the moment . We
                apologize for any inconvenience this may cause. However,
                deposits via cryptocurrency are still available for your
                convenience
              </p>
            </div>
          </div>
          <div className="accordion">
            <div
              className="first w-full h-10 bg-black rounded-xl flex justify-between items-center text-white px-4 text-sm cursor-pointer"
              onClick={() => handleOpen(5)}
            >
              <p>Deposit via Cryptocurrency</p>
              <MdKeyboardControlKey />
            </div>
            <div
              className={`${open.includes(5) ? 'h-auto' : 'h-0'
                } w-full transition-all ease-in-out duration-300 overflow-hidden`}
            >
              <div className="flex justify-center items-center space-x-4 py-2">
                <div className="flex items-center space-x-2 text-xs">
                  <p className="text-neutral">Currency -</p>
                  <img
                    src="https://www.swiftpayu.com//ddocs/cusdt.png"
                    alt=""
                    className="w-7 h-7"
                  />
                  <p>USDT</p>
                </div>
                <div className="flex items-center space-x-1 text-xs">
                  <p className="text-neutral">Network -</p>
                  <p>ERC20</p>
                </div>
              </div>
              <p className="my-5 text-sm text-pri text-center">
                Scan code to deposit
              </p>
              <div className="flex items-center justify-center w-full">
                <img src={qr} alt="qr" width={'30%'} />
              </div>
              <p className="my-5 text-sm text-pri text-center">
                Deposit address
              </p>
              <p className="my-5 text-neutral text-center">
                0x5ACfcca819cd2265469152688d112a3d5aF65696
              </p>
              <div
                className="w-full bg-pri text-white py-2 hover:bg-hover cursor-pointer text-center"
                onClick={() =>
                  copyText('0xA3BaC29Dc409f0d14379aFfEbdCb3c4E141dCD9A')
                }
              >
                Copy Address
              </div>
              <div className="text-xs py-4">
                <div className="flex items-center space-x-3">
                  <p>Internal Transfers -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <p>External Transfers -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <p>External Deposit -</p>
                  <span className="text-green-500">
                    <BsCheckCircle />
                  </span>
                </div>
              </div>
              <p className="my-2 text-xs text-neutral">
                If your deposit does not appear in your EUR balance within 24
                hours, please do not hesitate to{' '}
                <span onClick={() => mailTo()} className="text-pri">
                  contact our support team
                </span>{' '}
                for assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
