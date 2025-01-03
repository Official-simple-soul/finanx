const NavBar = () => (
  <nav className="bg-secondary text-white h-[55px] px-6 flex justify-between items-center text-xs md:text-sm sticky top-0 z-50">
    <div className="flex gap-6">
      <a href="#" className="font-bold">
        Individual
      </a>
      <a href="#" className="text-gray-400">
        Institutional
      </a>
      <a href="#" className="text-gray-400">
        Fintech & Developer
      </a>
    </div>
    <div className="hidden md:flex gap-6 items-center">
      <a href="#support">Support</a>
    </div>
  </nav>
);

export default NavBar;
