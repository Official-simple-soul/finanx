import { NavLink } from 'react-router';

function NavBarTwo() {
  return (
    <nav className="bg-white text-dark-blue py-4 px-6 flex justify-between items-center shadow-md sticky top-[55px] z-50">
      <div className="flex items-center gap-4">
        {/* <img
          src="/logo-1.svg"
          alt="TradeStation Logo"
          width={140}
          className=""
        /> */}
        <NavLink to="/">
          <h1 className="text-xl font-bold text-primary rubik">FinanX</h1>
        </NavLink>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="font-medium">
            Trading Products
          </a>
          <a href="#" className="font-medium">
            Platforms & Tools
          </a>
          <a href="#" className="font-medium">
            Accounts
          </a>
          <a href="#" className="font-medium">
            Pricing
          </a>
          <a href="#" className="font-medium">
            Learn
          </a>
          <a href="#" className="font-medium">
            Insights
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {/* <button className="p-2 rounded-full border border-gray-300 flex items-center justify-center">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z"
            />
          </svg>
        </button> */}
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
    </nav>
  );
}

export default NavBarTwo;
