'use client'
import React, { useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import { apikey, authDomain, databaseURL, projectId, storageBucket, mesaggingSenderId, appId, measurementId } from "./utils/auth-firebase";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import Dashboard from "./components/dashboard";
import Table from "./components/table";
import Sidebar from "./components/sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DashboardContext } from './DashboardContext';

//=========================

//=====================================
const SidebarWithNoSSR = dynamic(() => import('./components/sidebar'), {
  ssr: false
});
const downloadCSV = async () => {
  const data = await getData();
  const csvData = Object.keys(data[0]).join(',') + '\n' + data.map(row => Object.values(row).join(',')).join('\n');
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.csv';
  link.click();
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [dashboardContent, setDashboardContent] = useState('default');

  const handleCheckboxChange = (event) => {
    setIsOpen(event.target.checked);
    const checkbox = document.getElementById('menuToggle');
    const element = document.getElementById('mainpage');
    if (event.target.checked) {

      checkbox.classList.add('pl-60');
      checkbox.classList.add('sm:pl-48');
      checkbox.classList.add('md:pl-48');
      checkbox.classList.remove('pl-4');
      checkbox.classList.remove('sm:pl-4');
      checkbox.classList.remove('md:pl-4');

      element.classList.add('pl-2');
      element.classList.add('sm:pl-64');
      element.classList.add('md:pl-64');
      element.classList.remove('pl-16');
      element.classList.remove('sm:pl-16');
      element.classList.remove('md:pl-16');

    } else {
      checkbox.classList.remove('pl-60');
      checkbox.classList.remove('sm:pl-48');
      checkbox.classList.remove('md:pl-48');
      checkbox.classList.add('pl-4');
      checkbox.classList.add('sm:pl-4');
      checkbox.classList.add('md:pl-4');

      element.classList.remove('pl-2');
      element.classList.remove('sm:pl-64');
      element.classList.remove('md:pl-64');
      element.classList.add('pl-16');
      element.classList.add('sm:pl-16');
      element.classList.add('md:pl-16');
    }


  };




  return (
    console.log("isOpen", isOpen),

    <DashboardContext.Provider value={{ dashboardContent, setDashboardContent }}>

      <main className="py-1 flex sm:flex-col  md:flex-col flex-row">
        <div id="menuToggle" className="fixed z-50  inline-block pl-60 sm:pl-48 md:pl-48">
          <input id="checkbox" type="checkbox" class="hidden" checked={isOpen}
            onChange={handleCheckboxChange} />
          <label for="checkbox" class="toggle block cursor-pointer w-4 h-4 mx-auto">
            <div className="bar bar--top absolute left-0 right-0 h-1 rounded bg-blue-600"></div>
            <div className="bar bar--middle absolute top-1/2 left-0 right-0 h-1 opacity-100 transition-opacity transform -translate-y-1/2 rounded bg-blue-600"></div>
            <div className="bar bar--bottom absolute top-full left-0 right-0 h-1 rounded bg-blue-600"></div>
          </label>
        </div>
        <SidebarWithNoSSR isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* <nav className="bg-gray-800 text-white w-full lg:hidden">
        <button onClick={() => setIsOpen(true)} className="p-2">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav> */}
        <div id="mainpage" className="pl-2 sm:pl-64 md:pl-64 lg:pl-62  flex-col"> {/* Add left padding to content equivalent to sidebar width */}

          <div className="py-2 ">
            <div className="bg-blue-200 text-blue-700 p-4 rounded-md" role="alert">
              Selamat Datang!
            </div>
          </div>
          <div className="flex flex-row flex-wrap box-border">
            {dashboardContent === 'table' ? <Table /> : <Dashboard />}
          </div>
        </div>
      </main>
    </DashboardContext.Provider>

  );
}
