'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { apikey, authDomain, databaseURL, projectId, storageBucket, mesaggingSenderId, appId, measurementId } from "./utils/auth-firebase";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import Fetch from "./components/fetch";
import Sidebar from "./components/sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  const handleCheckboxChange = (event) => {
    setIsOpen(event.target.checked);
  };

  return (
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
      <div className="pl-2 sm:pl-64 md:pl-64 lg:pl-62  flex-col"> {/* Add left padding to content equivalent to sidebar width */}

        <div className="py-2 ">
          <div className="bg-blue-200 text-blue-700 p-4 rounded-md" role="alert">
            Selamat Datang!
          </div>
        </div>
        <div className="flex flex-row flex-wrap box-border">
          <Fetch />
        </div>
      </div>
    </main>
  );
}
