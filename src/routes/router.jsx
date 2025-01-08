import { Routes, Route, Navigate } from 'react-router';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import KYCScreen from '../pages/KYC';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import { useApp } from '../context/AppStore';

// ProtectedRoute Component
function ProtectedRoute({ children }) {
  const { userToken } = useApp();
  const token = userToken || localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

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
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRouter;
