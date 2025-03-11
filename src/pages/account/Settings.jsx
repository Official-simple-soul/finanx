import { useState } from 'react';
import Button from './components/ui/Button';
import Switch from './components/ui/Switch';
import { BsInfoCircle } from 'react-icons/bs';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import Modal from '../../components/Modal';
import { useGetUser } from '../service';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function Settings() {
  const [editModal, setEditModal] = useState(false);
  const [factorModal, setFactorModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState(false);
  const { data: user } = useGetUser(auth?.currentUser?.uid)
  const userInfo = [
    { label: 'First Name', value: user?.fullName?.split(' ')[0] },
    { label: 'Last Name', value: user?.fullName?.split(' ')[1] },
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { label: 'Country', value: user?.country },
    { label: 'State', value: user?.state },
  ];

  const route = useNavigate()
  const signOutAuth = () => {
    signOut(auth);
    route('/login', { replace: true })
    sessionStorage.removeItem('token');
    setUserToken(null);
  };

  const handleTwoStepVerification = (e) => {
    setFactorModal(true);

    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 py-6 px-4">
      <div className="profile_img flex flex-col gap-4 justify-center items-center">
        <div className="img_con w-36 h-36 border rounded flex items-center justify-center">
          <FaRegUserCircle className="text-8xl text-gray-400" />
        </div>
      </div>
      <div className="user_details flex flex-col gap-4">
        <h2 className="text-neutral text-sm">FinanX Profile</h2>
        <div className="details bg-white p-4 rounded-xl shadow">
          {userInfo.map((n, i) => (
            <div key={i} className="flex justify-between  gap-10 py-4 border-b pt-3">
              <span className="text-pri text-sm">{n.label}</span>
              <span className="text-neutral text-sm truncate">{n.value}</span>
            </div>
          ))}

          <Button
            textContent={'Edit Information'}
            styles={'bg-pri text-white mt-3 rounded py-1 text-sm px-3'}
            callback={() => setEditModal(true)}
          />
        </div>
      </div>
      <div className="acc_limit flex flex-col gap-3">
        <h2 className="text-neutral text-sm">Account Limit</h2>
        <div className="flex justify-between items-center bg-white shadow p-3 rounded-xl">
          <span className="flex-1 text-pri text-sm">Tier 1</span>
          <Button
            textContent={'Upgrade Limit'}
            styles={'bg-pri flex-1 text-white rounded py-1 text-sm'}
            callback={() => setUpgradeModal(true)}
          />
        </div>
      </div>
      <div className="edit_security flex flex-col gap-4">
        <h2 className="text-neutral text-sm">Security</h2>
        <div className="flex flex-col gap-2 bg-white shadow p-3 rounded-xl">
          <div className="flex justify-between items-center p-1">
            <span className="whitespace-nowrap">2 Step Verification</span>
            <Switch
              handleActivateCard={handleTwoStepVerification}
              checked={null}
            />
          </div>
        </div>
      </div>
      <p className="text-red-600 text-center my-5" onClick={signOutAuth}>
        Log Out
      </p>

      <Modal isOpen={editModal} onClose={() => setEditModal(false)}>
        <div className="flex flex-col justify-center items-center">
          <BsInfoCircle />
          <p className="text-sm mt-8 text-center">
            To ensure the safety and security of your account, we kindly request
            that you either visit our nearest branch with a valid form of
            identification or contact our support team via email to initiate
            updates to your account information
          </p>
          <div className="border-t w-full mt-4 text-center py-2">
            <p
              className="text-pri cursor-pointer"
              onClick={() => setEditModal(false)}
            >
              Okay
            </p>
          </div>
        </div>
      </Modal>
      <Modal isOpen={upgradeModal} onClose={() => setUpgradeModal(false)}>
        <div className="flex flex-col justify-center items-center pt-5">
          <BsInfoCircle className='text-4xl' />
          <p className="text-sm mt-8 text-center">
            Please top up before proceeding with
            upgrading your account limit
          </p>
          <div className="border-t w-full mt-4 text-center py-2">
            <p
              className="text-pri cursor-pointer"
              onClick={() => setUpgradeModal(false)}
            >
              Okay
            </p>
          </div>
        </div>
      </Modal>
      <Modal isOpen={factorModal} onClose={() => setFactorModal(false)}>
        <div className="flex flex-col justify-center items-center">
          <BsInfoCircle />
          <p className="text-sm mt-8 text-center">
            {check ? '2 Factor activated' : '2 factor deactivated'}
          </p>
          <div className="border-t w-full mt-4 text-center py-2">
            <p
              className="text-pri cursor-pointer"
              onClick={() => setFactorModal(false)}
            >
              Okay
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Settings;
