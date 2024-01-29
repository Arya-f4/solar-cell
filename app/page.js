

import { apikey, authDomain, databaseURL, projectId, storageBucket, mesaggingSenderId, appId, measurementId } from "./utils/auth-firebase";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import Fetch from "./components/fetch";
import Sidebar from "./components/sidebar";


//=========================

//=====================================


export default function Home() {

  return (
    <main className="py-1 flex">
      <div className="fixed top-0 left-0 h-screen">
        <Sidebar />
      </div>
      <div className="pl-64"> {/* Add left padding to content equivalent to sidebar width */}
        <div className="py-4">
          <div className="bg-blue-200 text-blue-700 p-4 rounded-md" role="alert">
            Selamat Datang!
          </div>
        </div>
        <div className="flex min-h-screen flex-col items-center justify-between p-10">
          <Fetch />
        </div>
      </div>
    </main>
  );
}
