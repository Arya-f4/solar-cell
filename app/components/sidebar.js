'use client'
import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSheetPlastic, faTachometer, faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { DashboardContext } from '../DashboardContext';


const Sidebar = ({ isOpen }) => {
  const { setDashboardContent } = useContext(DashboardContext);
  const [activeId, setActiveId] = useState('');

  const menuItems = [
    { id: 'dashboard', icon: faTachometerAlt, label: 'Statis' },
    { id: 'table', icon: faSheetPlastic, label: 'Data Statis' },
    { id: 'flexsible', icon: faTachometer, label: 'Fleksibel' },
    { id: 'dataflex', icon: faSheetPlastic, label: 'Data Fleksibel' },
    { id: 'graphic', icon: faTachographDigital, label: 'Grafik' },
  ];

  const handleMenuItemClick = (id) => {
    setDashboardContent(id);
    setActiveId(id); // Menyimpan id item yang aktif
  };

  return isOpen && (
    <nav className={`sidebar z-10 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-900 text-white h-screen md:w-[250px] lg:left-0 w-full md:fixed top-0 bottom-0 left-0 overflow-y-auto sm:w-64 fixed`}>
      <div className="text-gray-100 text-xl mt-6 ml-3">
        <div className='p-2.5 mt-1 flex items-center'>
          <h1 className="font-bold text-gray-200 text-[20px] ml-4">Panel Surya</h1>
        </div>
      </div>
      {menuItems.map((item) => (
        <div key={item.id} onClick={() => handleMenuItemClick(item.id)} className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${activeId === item.id ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white`}>
          <FontAwesomeIcon icon={item.icon} className="mr-2" />
          <span className='text-[15px] ml-4 text-gray-200'>{item.label}</span>
        </div>
      ))}
      <hr className="my-4 text-gray-600" />
    </nav>
  );
};

export default Sidebar;
