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
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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


  return (
    <main className="py-1 flex flex-col md:flex-row">
      <div className={`fixed top-0 bottom-0 right-0 h-screen md:w-64 w-full md:static ${isOpen ? 'block' : 'hidden'} md:block`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 m-2 lg:hidden">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <SidebarWithNoSSR isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="pl-2 md:pl-30"> {/* Add left padding to content equivalent to sidebar width */}
        <nav className="bg-gray-800 text-white w-full lg:hidden">
          <button onClick={() => setIsOpen(true)} className="p-2">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
        <div className="py-4">
          <div className="bg-blue-200 text-blue-700 p-4 rounded-md" role="alert">
            Selamat Datang!
          </div>
        </div>
        <div className="flex flex-col flex-wrap box-border">
          <Fetch />
        </div>
      </div>
    </main>
  );
}
