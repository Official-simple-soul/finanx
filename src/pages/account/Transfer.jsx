import { BsInfoCircle, BsKeyFill } from 'react-icons/bs';
import { useState } from 'react';
import Button from './components/ui/Button';
import { useGlobalStore } from '../../store/Context';
import useCurrency from '../../services/useCurrency';
import Modal from '../../components/Modal';
import { useGetUser } from '../service';
import { auth } from '../../../firebase';
import { expected } from '../../../utils/constants';

function Transfer() {
  const { currencyWithFlag } = useCurrency();
  const { setLoader, setPage, switchKey } = useGlobalStore();
  const [transferConfirmModal, setTransferConfirmModal] = useState(false);
  const { data: user } = useGetUser(auth?.currentUser?.uid)

  const handleTransferFund = (e) => {
    e.preventDefault();
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setTransferConfirmModal(true);
    }, 2000);
  };

  const handlePage = () => {
    setTransferConfirmModal(false);
    setLoader(true);
    setPage('deposit');
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="">
        <div className="bg-white p-4 rounded-xl text-sm border-b pb-4 mb-4 text-gray-500">
          <p className="border-b border-pri py-2">
            Do not perform transactions on public Wifi as they may be unsecure.
          </p>
          <p className="py-2">
            Transactions may not be processed if any information provided is
            incorrect.
          </p>
        </div>
        {switchKey === 1 ? null : (
          <p className="text-sm text-neutral mb-4">
            We will send the equivalent amount of crypto to the address provided
          </p>
        )}
        {switchKey === 1 ? (
          <div className="grid gap-4">
            <label className="">
              <span className="text-gray-700">From {(user?.mainBalance || 0) < expected ? <span className='text-xs'>(Your bonus balance is &#36;{(user?.balance).toLocaleString()}. Top up main balance with &#36;{(expected - (user?.mainBalance || 0)).toLocaleString()} to activate it)</span> : null}</span>
              <select
                name="from"
                id="from"
                className="mt-1 block w-full border-gray-300 shadow-sm outline-none bg-white p-4 rounded-xl"
              >
                <option value="011987874260-Balance(EUR 0.00)">
                  Balance (USD{' '}
                  {(user?.mainBalance || 0)
                    ?.toLocaleString()}
                  )
                </option>
              </select>
            </label>

            {[
              'Cash Amount',
              'Destination Bank Name',
              'Destination Bank Branch',
              'Destination Bank Swift/Iban/Branch Code',
              'Destination Account Number',
              'Destination Account Name',
            ].map((field) => (
              <div key={field} className="block">
                <label
                  htmlFor={field.replaceAll(/\s+/g, '_').toLowerCase()}
                  className="text-gray-500 text-sm"
                >
                  {field}
                </label>

                <div className="bg-white px-2 rounded-xl shadow">
                  <input
                    type="text"
                    id={field.replaceAll(/\s+/g, '_').toLowerCase()}
                    className="mt-1 w-full py-2 shadow-sm outline-none focus:border-b-[3px] focus:border-pri transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            ))}

            <label className="block">
              <span className="text-gray-500">
                Destination Country/Currency
              </span>
              <select
                name="accountype"
                id="destination_country_currency"
                className="mt-1 block w-full border-gray-300 shadow-sm  focus:outline-none bg-white p-2 rounded-xl"
              >
                {currencyWithFlag?.map((curr, index) => (
                  <option key={index} value={curr.currCode}>
                    {curr.currCode}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-gray-500 text-sm">
                Transaction note/remark
              </span>
              <textarea
                name="remark"
                id="remark"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 placeholder:text-sm"
                placeholder="Let us know more about you"
              ></textarea>
            </label>
            <Button
              textContent={'Transfer Funds'}
              callback={handleTransferFund}
              styles={'bg-pri py-2 w-full rounded-lg text-white mt-4'}
            />
          </div>
        ) : (
          <div className="">
            <label className="">
              <span className="text-sm text-neutral">From {(user?.mainBalance || 0) < expected ? <span className='text-xs'>(Your bonus balance is &#36;{(user?.balance).toLocaleString()}. Top up main balance with &#36;{(expected - (user?.mainBalance || 0)).toLocaleString()} to activate it)</span> : null}</span>
              <select
                name="from"
                id="from"
                className="mt-1 block w-full border-gray-300 shadow-sm outline-none bg-white p-4 rounded-xl"
              >
                <option value="011987874260-Balance(EUR 0.00)">
                  Balance (USD{' '}
                  {(user?.mainBalance || 0)
                    ?.toLocaleString()}
                  )
                </option>
              </select>
            </label>
            <form action="" onSubmit={handleTransferFund}>
              <label htmlFor="" className="text-sm text-neutral">
                Crypto Coin
                <select
                  name=""
                  id=""
                  required
                  className="block w-full p-2 rounded-md shadow mb-3 bg-white"
                >
                  <option value="3500">Ethereum</option>
                  <option value="85000">Bitcoin</option>
                </select>
              </label>
              <label htmlFor="" className="text-sm text-neutral">
                Destination wallet address
                <input
                  type="text"
                  required
                  className="block w-full p-2 rounded-md shadow mb-3"
                />
              </label>
              <label htmlFor="" className="text-sm text-neutral">
                <div className="flex space-x-4 items-center">
                  <div className="w-full">
                    <p>Amount to withdraw</p>
                    <input
                      type="number"
                      required
                      max={user?.balance}
                      min={1000}
                      className="block w-full p-2 rounded-md shadow"
                    />
                  </div>
                </div>
              </label>
              <div className="flex justify-center items-center my-8">
                <button
                  type="submit"
                  className="px-8 py-2 rounded-md bg-pri text-sm text-white"
                >
                  Transfer Crypto
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Modal
        isOpen={transferConfirmModal}
        onClose={() => setTransferConfirmModal(false)}
      >
        <div className="flex flex-col justify-center items-center">
          <BsInfoCircle />
          <p className="my-4">Transfer Request</p>
          <p className="text-sm text-center">
            Please top up your main balance with &#36;{(expected - (user?.mainBalance || 0)).toLocaleString()} to be able to transfer
          </p>
          <div className="border-t w-full mt-4 py-2 text-center items-center  space-x-8">
            <p className="text-pri cursor-pointer" onClick={handlePage}>
              Okay
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Transfer;
