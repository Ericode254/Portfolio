// Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[#1d2021] text-[#ebdbb2] w-5 h-screen flex flex-col justify-center items-center p-6 hidden md:flex">
      <nav>
        <ul className="flex flex-col space-y-6">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#d79921] text-[#282828] w-12 h-12 flex items-center justify-center rounded-full shadow-lg'
                  : 'bg-[#3c3836] text-[#ebdbb2] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#d79921] transition duration-300'
              }
            >
              A
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#d79921] text-[#282828] w-12 h-12 flex items-center justify-center rounded-full shadow-lg'
                  : 'bg-[#3c3836] text-[#ebdbb2] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#d79921] transition duration-300'
              }
            >
              P
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#d79921] text-[#282828] w-12 h-12 flex items-center justify-center rounded-full shadow-lg'
                  : 'bg-[#3c3836] text-[#ebdbb2] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#d79921] transition duration-300'
              }
            >
              C
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
