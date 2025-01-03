import { NavLink } from 'react-router';

const Login = () => (
  <div className="h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-dark-blue text-center">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500">Sign in to your account</p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary-blue rounded focus:ring-primary-blue"
            />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-sm text-primary-blue hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-blue-dark focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Don’t have an account?{' '}
          <NavLink to="/signup" className="text-primary-blue hover:underline">
            Open Account
          </NavLink>
          {/* <a href="#" className="text-primary-blue hover:underline">
            Sign Up
          </a> */}
        </p>
      </div>
    </div>
  </div>
);

export default Login;
