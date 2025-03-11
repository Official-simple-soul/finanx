import { Routes, Route, Navigate } from 'react-router';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import KYCScreen from '../pages/KYC';
import Dashboard from '../pages/Dashboard';
import { useApp } from '../context/AppStore';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="kyc" element={<KYCScreen />} />
      <Route
        path="dashboard"
        element={
          <Dashboard />
        }
      />
    </Routes>
  );
}

export default AppRouter;
