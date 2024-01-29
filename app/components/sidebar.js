import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto sm:w-64 sm:fixed">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Sidebar</h1>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:bg-gray-700 px-4 py-2 block">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 px-4 py-2 block">Solar Cell</a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 px-4 py-2 block">Download</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
