'use client'
import React, { useState, useEffect } from 'react';
import { useDatabase } from './download.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTachometerAlt, faSun, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DashboardContext } from '../DashboardContext';


const Sidebar = ({ isOpen, setIsOpen }) => {

  // const downloadCSV = async () => {
  //   const data = await getData();
  //   const csvData = Object.keys(data[0]).join(',') + '\n' + data.map(row => Object.values(row).join(',')).join('\n');
  //   const blob = new Blob([csvData], { type: 'text/csv' });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'data.csv';
  //   link.click();
  // };
  const data = useDatabase();
  const { setDashboardContent } = useContext(DashboardContext);

  const downloadCSV = () => {

    let csvContent = "Time,X_axis_angle (deg),Y_axis_angle (deg),Power (W),Energy (W),Current (A),Voltage (V)\n";
    data.forEach((item) => {
      csvContent += `${item.Time},${item['X_axis_angle']} deg,${item['Y_axis_angle']} deg,${item.Power} W,${item.Energy} W,${item.Current} A,${item.Voltage} V\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'solar_data.csv');
  }

  return isOpen && (
    <nav className={`sidebar z-10 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-900 text-white h-screen md:w-[250px] lg:left-0 w-full md:absolutetop-0 bottom-0 left-0 overflow-y-auto sm:w-64 fixed`}>
      {/* the stupid close button */}

      {/* <button onClick={() => setIsOpen(false)} className="absolute md:pl-56 pl-96  m-2 text-4xl lg:hidden md:text-lg">
        <FontAwesomeIcon icon={faTimes} />
      </button> */}
      <div className="text-gray-100 text-xl">
        <div className='p-2.5 mt-1 flex items-center'>
          <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
          <h1 className="font-bold text-gray-200 text-[15px] ml-4">Sidebar</h1>
          <i className='bi bi-x ml-20 lg:hidden'></i>
        </div>

      </div>
      <div onClick={() => setDashboardContent('default')} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
        <span className='text-[15] ml-4 text-gray-200'>Dashboard</span>
      </div>
      <div onClick={() => setDashboardContent('table')} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
        <FontAwesomeIcon icon={faSun} className="mr-2" />
        <span className='text-[15] ml-4 text-gray-200'>Solar Cell</span>
      </div>
      <div onClick={downloadCSV} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        <span className='text-[15] ml-4 text-gray-200'>Download CSV</span>

      </div>
      {/* <div>
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block">
             Dashboard
          </a>
        </div>
        <div>
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block">
            <FontAwesomeIcon icon={faSun} className="mr-2" />
            Solar Cell
          </a>
        </div>
        <div>
          <button onClick={downloadCSV} className="hover:bg-gray-700 px-4 py-2 block">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download
          </button>
        </div> */}
      <hr className="my-4 text-gray-600" />


    </nav>
  );

};

export default Sidebar;
