import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/login';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />

      {/* <Route element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
      </Route> */}

      {/* <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
    </Routes>
  );
}

export default AppRouter;
