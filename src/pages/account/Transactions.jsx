import { notifications } from '@mantine/notifications';
import { auth } from '../../../firebase';
import { useGetUser } from '../service';

function Transactions() {
  const { data: user } = useGetUser(auth.currentUser.uid)

  const handlePageChange = () => {
    notifications.show({
      title: 'Account Statement',
      message: 'Top up your main balance to view your account statement',
      color: 'red'
    })
    return
  };

  return (
    <div className="space-y-8 my-10">
      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <p className="text-neutral text-xs">Total Income</p>
        <p className="text-green-500 text font-bold">
          + &#8364; {user.balance.toLocaleString() || 0.0} <span className='text-xs text-gray-500 font-normal'>(Bonus Amount)</span>
        </p>
        <p className="text-green-500 text-3xl font-bold">
          + &#8364; {(user?.mainBalance || 0.0).toLocaleString()}
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <p className="text-neutral text-xs">Total Expenses</p>
        <p className="text-red-500 text-3xl font-bold">- &#8364; 0.00</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="text-neutral">Transactions</p>
        <p className="text-pri cursor-pointer" onClick={handlePageChange}>
          Account Statement
        </p>
      </div>
    </div>
  );
}

export default Transactions;
