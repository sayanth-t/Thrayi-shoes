import { headerLogo } from '../assets/images/index';
import { hamburger } from '../assets/icons/index';

import { navLinks } from '../constants/index';
import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x relative py-5 w-full z-100">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img width={150} src={headerLogo} alt="" />
        </a>
        <ul className="max-lg:hidden  flex gap-10 ">
          {navLinks.map((navItem) => (
            <li key={navItem.label}>
              <a href={navItem.href} className="font-monts text-gray-600">
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block ">
          <img
            onClick={toggleMenu}
            src={hamburger}
            alt="Hamberger"
            className="w-10 h-8"
          />
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`lg:hidden fixed top-16 right-5 w-60 bg-white shadow-lg p-5 rounded-xl transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-80'
        }`}
      >
        <ul className='flex flex-col gap-4'>
          {navLinks.map((navItem) => (
            <li key={navItem.label}>
              <a href={navItem.href} className="font-monts text-gray-600">
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
