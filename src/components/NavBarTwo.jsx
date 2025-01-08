import { useState } from 'react';
import { NavLink } from 'react-router';

function NavBarTwo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white text-dark-blue py-4 px-6 flex justify-between items-center shadow-md sticky top-[55px] z-50">
      <div className="flex items-center gap-4">
        <NavLink onClick={close} to="/">
          <h1 className="text-xl font-bold text-primary rubik">FinanX</h1>
        </NavLink>
        <div className="hidden md:flex items-center gap-6">
          <a href="#trading" className="font-medium">
            Trading Products
          </a>
          <a href="#tools" className="font-medium">
            Platforms & Tools
          </a>
          <a href="#account" className="font-medium">
            Accounts
          </a>
          <a href="#pricing" className="font-medium">
            Pricing
          </a>
          <a href="#assist" className="font-medium">
            Learn
          </a>
          <a href="#news" className="font-medium">
            Insights
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/login">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Sign In
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
            Open Account
          </button>
        </NavLink>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-start p-4 space-y-4">
            <a href="#trading" className="font-medium">
              Trading Products
            </a>
            <a href="#tools" className="font-medium">
              Platforms & Tools
            </a>
            <a href="#account" className="font-medium">
              Accounts
            </a>
            <a href="#pricing" className="font-medium">
              Pricing
            </a>
            <a href="#learn" className="font-medium">
              Learn
            </a>
            <a href="#" className="font-medium">
              Insights
            </a>
            <NavLink onClick={close} to="/login">
              <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">
                Sign In
              </button>
            </NavLink>
            <NavLink onClick={close} to="/signup">
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg font-medium">
                Open Account
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBarTwo;
