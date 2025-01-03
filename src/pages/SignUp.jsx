import { NavLink } from 'react-router';

const SignUp = () => (
  <div className="h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-lg p-8 space-y-6 mt-[80px] md:mt-0 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-dark-blue text-center">
        Create Your Account
      </h2>
      <p className="text-center text-gray-500">
        Join us and explore all features
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>
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
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
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
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              required
              className="form-checkbox h-5 w-5 text-primary-blue rounded focus:ring-primary-blue"
            />
            <span className="ml-2 text-sm text-gray-700">
              I agree to the terms and conditions
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-blue-dark focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <NavLink to="/login" className="text-primary-blue hover:underline">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default SignUp;
