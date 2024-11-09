import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#282828] text-[#d79921] p-4 shadow-lg rounded-lg max-w-screen-lg mx-auto relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <NavLink to="/" className="hover:text-[#fabd2f] transition-colors duration-300">
            My Portfolio
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="w-8 h-8 focus:outline-none">
            <svg className="w-6 h-6 text-[#fabd2f]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-[#282828] md:bg-transparent rounded-b-lg shadow-md md:shadow-none p-4 md:p-0`}>
          <li>
            <NavLink to="/about" className="block md:inline-block text-center py-2 hover:text-[#fabd2f] transition-colors duration-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="block md:inline-block text-center py-2 hover:text-[#fabd2f] transition-colors duration-300">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="block md:inline-block text-center py-2 hover:text-[#fabd2f] transition-colors duration-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
