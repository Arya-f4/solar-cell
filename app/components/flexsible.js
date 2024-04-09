'use client'
//STATIS COMPONENT
import { useEffect, useState } from 'react';
import { apikey, authDomain, databaseURL, projectId, storageBucket, mesaggingSenderId, appId, measurementId } from "../utils/auth-firebase";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyCcmyjVxC8E2Lbl1FvMs0_mCkcJ_x5x87k',
  authDomain: 'panelsurya-edafc.firebaseapp.com',
  databaseURL: 'https://panelsurya-edafc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'panelsurya-edafc',
  storageBucket: 'panelsurya-edafc.appspot.com',
  messagingSenderId: '764730679010',
  appId: '764730679010:web:14d2371c364a94630408bb',
  measurementId: 'G-NDFYZRRRZT'
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Flexsible() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(db, '/');
    const listener = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = snapshot.val();
        // Menghapus konten "Statis_Solar" dari data yang diambil
        delete rawData['Statis_Solar'];
        // Menyimpan data waktu sebelum menggabungkan data
        const timeData = rawData['Time'];
        // Menggabungkan semua data menjadi satu objek
        const combinedData = Object.values(rawData).reduce((acc, current) => {
          if (typeof current === 'object' && !Array.isArray(current)) {
            return { ...acc, ...current };
          }
          return acc;
        }, {});
        // Menambahkan data waktu ke dalam objek data yang digabungkan
        combinedData['Time'] = timeData;
        setData(combinedData);

      } else {
        console.log("No data available");
      }

    });

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      off(dbRef, 'value', listener);
    };
  }, []);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }
  const groupedProperties = {
    "Accelerometer Data": ["X axis angle", "Y axis angle"],
    "PZEM Energy Monitor Data": ["Voltage", "Current", "Power"],
    "Time": ["Time"],
    // Add more groupings as needed
  };
  const valueSuffixes = {
    "X axis angle": "deg",
    "Y axis angle": "deg",
    "Current": "A",
    "Power": "W",
    "Voltage": "V",
    "Time": "",
    // Add more suffixes as needed
  };
  const colorMapping = {
    "Accelerometer Data": "red",
    "PZEM Energy Monitor Data": "green",
    "Time": "blue"
    // Add more color mappings as needed
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">



      {Object.keys(groupedProperties).map((group) => (
        <div key={group} className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8">

          <h2 className="font-bold text-lg md:text-xl lg:text-2xl">{group}</h2>
          <div className="flex justify-end ">
            <svg className={`icon h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 fill-current text-${colorMapping[group]}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" fill={colorMapping[group]} clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {groupedProperties[group].map((property) => (
              <div key={property} className="flex items-center">
                <span className={`inline-block h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full mr-2 bg-${colorMapping[property]}`}></span>
                <span className="text-sm md:text-base lg:text-lg">{property}: {data[property]} {valueSuffixes[property]}</span>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>

  );
}
export { firebaseConfig };
export default Flexsible;

