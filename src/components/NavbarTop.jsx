import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ModelViewerTwo from './ModelViewerTwo';

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white">
              <div className='fixed -top-6 -left-16 z-30'>
                <ModelViewerTwo />
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center md:pl-32">
            <NavLink exact to="/" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Home</NavLink>
            <NavLink to="/about" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">About</NavLink>
            <NavLink to="/achievements" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Achievements</NavLink>
            {/* <NavLink to="/tasks" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Challenges</NavLink> */}
            <NavLink to="/team" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Team</NavLink>
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className=" sm:hidden bg-black mt-2">
            <NavLink exact to="/" activeClassName="bg-gray-700" className="block text-white hover:bg-gray-700 px-4 py-2 mt-10 ">Home</NavLink>
            <NavLink to="/about" activeClassName="bg-gray-700" className="block text-white hover:bg-gray-700 px-4 py-2">About</NavLink>
            <NavLink to="/achievements" activeClassName="bg-gray-700" className="block text-white hover:bg-gray-700 px-4 py-2">Achievements</NavLink>
            {/* <NavLink to="/tasks" activeClassName="bg-gray-700" className="block text-white hover:bg-gray-700 px-4 py-2">Challenges</NavLink> */}
            <NavLink to="/team" activeClassName="bg-gray-700" className="block text-white hover:bg-gray-700 px-4 py-2">Team</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarTop;
