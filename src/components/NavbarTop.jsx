import React from 'react';
import { NavLink } from 'react-router-dom';
import ModelViewerTwo from './ModelViewerTwo';

const NavbarTop = () => {
  return (
    <nav className="bg-black py-6 sticky top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" items-center">
          <div className=" text-white">
            {/* <img src="byte-logo-transparent.png" className='w-20 p-4' alt="" /> */}
            {/* <div className='fixed top-20 -right-20 z-30'>
              <ModelViewerTwo />
            </div> */}
            <div className='fixed -top-6 -left-16 z-30'>
              <ModelViewerTwo />
            </div>
          </div>
          <div className=" flex items-start pl-32">
            <div className="flex  items-center justify-between">

              <NavLink exact to="/home" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Home</NavLink>
              <NavLink to="/about" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">About</NavLink>

              <NavLink to="/achievements" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Achievements</NavLink>
              <NavLink to="/tasks" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Challenges</NavLink>
              <NavLink to="/team" activeClassName="bg-gray-700" className="text-white hover:bg-gray-700 px-4 py-4 text-sm font-medium">Team</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;