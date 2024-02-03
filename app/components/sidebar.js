'use client'
import React, { useState, useEffect } from 'react';
import { useDatabased } from './download.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSun, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
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
  const data = useDatabased();


  const downloadCSV = () => {
    if (data) {
      // Flatten the nested objects into a single level object
      const flattenedData = Object.entries(data).reduce((acc, [key, value]) => {
        Object.entries(value).forEach(([subKey, subValue]) => {
          acc[`${key} - ${subKey}`] = subValue;
        });
        return acc;
      }, {});

      // Convert the flattened object into CSV
      const csvData = Object.keys(flattenedData).join(',') + '\n' + Object.values(flattenedData).join(',');

      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'data.csv';
      link.click();
    } else {
      console.log('Data is not available');
    }
  };
  return isOpen && (
    <nav className="bg-gray-800 text-white h-screen md:w-64 w-full md:fixed top-0 left-0 overflow-y-auto sm:w-64 fixed">
      <button onClick={() => setIsOpen(false)} className="absolute md:pl-56 pl-96  m-2 text-4xl lg:hidden md:text-lg">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="p-4">

        <h1 className="text-2xl font-semibold mb-4">Sidebar</h1>

        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:bg-gray-700 px-4 py-2 block">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 px-4 py-2 block">
              <FontAwesomeIcon icon={faSun} className="mr-2" />
              Solar Cell
            </a>
          </li>
          <li>
            <button onClick={downloadCSV} className="hover:bg-gray-700 px-4 py-2 block">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
