'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Dashboard from "./components/dashboard";
import Table from "./components/table";

import { DashboardContext } from './DashboardContext';
import Dataflex from './components/dataflex';
import Flexsible from './components/flexsible';
import Graphic from './components/graphic';
//=========================

//=====================================
const SidebarWithNoSSR = dynamic(() => import('./components/sidebar'), {
  ssr: false
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [dashboardContent, setDashboardContent] = useState('default');
  console.log(dashboardContent)
  const handleCheckboxChange = (event) => {
    setIsOpen(event.target.checked);
    const checkbox = document.getElementById('menuToggle');
    const element = document.getElementById('mainpage');
    if (event.target.checked) {

      checkbox.classList.add('ml-60');
      checkbox.classList.add('sm:ml-48');
      checkbox.classList.add('md:ml-48');
      checkbox.classList.remove('ml-4');
      checkbox.classList.remove('sm:ml-4');
      checkbox.classList.remove('md:ml-4');

      element.classList.add('ml-2');
      element.classList.add('sm:ml-64');
      element.classList.add('md:ml-64');
      element.classList.remove('ml-16');
      element.classList.remove('sm:ml-16');
      element.classList.remove('md:ml-16');

    } else {
      checkbox.classList.remove('ml-60');
      checkbox.classList.remove('sm:ml-48');
      checkbox.classList.remove('md:ml-48');
      checkbox.classList.add('ml-4');
      checkbox.classList.add('sm:ml-4');
      checkbox.classList.add('md:ml-4');

      element.classList.remove('ml-2');
      element.classList.remove('sm:ml-64');
      element.classList.remove('md:ml-64');
      element.classList.add('ml-16');
      element.classList.add('sm:ml-16');
      element.classList.add('md:ml-16');
    }


  };




  return (
    console.log("isOpen", isOpen),

    <DashboardContext.Provider value={{ dashboardContent, setDashboardContent }}>

      <main className="py-1 flex sm:flex-col  md:flex-col flex-row">
        <div id="menuToggle" className="fixed z-50 inline-block ml-60 sm:ml-48 md:ml-48">
          <input id="checkbox" type="checkbox" class="hidden" checked={isOpen}
            onChange={handleCheckboxChange} />
          <label for="checkbox" class="toggle block cursor-pointer w-4 h-3 mx-auto">
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
        <div id="mainpage" className="ml-2 sm:ml-64 md:ml-64 lg:ml-62  flex-col"> {/* Add left padding to content equivalent to sidebar width */}

          <div className="py-2 ">
            <div className="bg-blue-200 text-blue-700 p-4 rounded-md" role="alert">
              Selamat Datang!
            </div>
          </div>
          <div className="flex flex-row flex-wrap box-border">

            {dashboardContent === 'table' ? <Table /> :
              (dashboardContent === 'dataflex' ? <Dataflex /> :
                (dashboardContent === 'graphic' ? <Graphic /> :
                  (dashboardContent === 'flexsible' ? <Flexsible /> : <Dashboard />)))}   </div>
        </div>
      </main>
    </DashboardContext.Provider>

  );
}
