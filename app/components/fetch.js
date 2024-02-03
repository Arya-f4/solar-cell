'use client'

import { useEffect, useState } from 'react';
import { apikey, authDomain, databaseURL, projectId, storageBucket, mesaggingSenderId, appId, measurementId } from "../utils/auth-firebase";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off, get, child } from "firebase/database";

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

//=========================

//=====================================

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(db, '/');
    const listener = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      off(dbRef, 'value', listener);
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  const nameMapping = {
    "X axis angle": "Posisi X",
    "Y axis angle": "Posisi Y",
    // Add more mappings as needed
  };
  const groupedProperties = {
    "X axis angle": "Y axis angle",
    "Current": "Energy",
    "Power": "Voltage",
    // Add more groupings as needed
  };
  const valueSuffixes = {
    "X axis angle": "deg",
    "Y axis angle": "deg",
    "Current": "A",
    "Energy": "W",
    "Power": "W",
    "Voltage": "V",
    // Add more suffixes as needed
  };
  const colorMapping = {
    "X axis angle": "red",
    "Y axis angle": "red",
    "Current": "green",
    "Energy": "green",
    "Power": "orange",
    "Voltage": "orange",
    // Add more color mappings as needed
  };


  return (
    <div className="flex gap-2 justify-start">
      {Object.entries(data).map(([category, categoryData]) => (
        <div key={category} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          {Object.entries(categoryData).reduce((acc, [property, value], index, arr) => {
            const mappedProperty = nameMapping[property] || property;
            const valueWithSuffix = `${value} ${valueSuffixes[property] || ''}`;
            if (groupedProperties[property]) {
              const nextProperty = arr.find(([key]) => key === groupedProperties[property]);
              if (nextProperty) {
                const nextValueWithSuffix = `${nextProperty[1]} ${valueSuffixes[nextProperty[0]] || ''}`;
                acc.push(
                  <div key={property} className="bg-white rounded-lg shadow-md p-5 gap-4 mb-4 w-30 md:w-custom-medium lg:w-custom-large">
                    <div className="icon-shape icon-shape-primary rounded-lg mr-4 sm:mr-0  bg-gray-400 h-16 w-16 flex items-center justify-center">
                      <svg className="icon h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" cx="16" cy="16" r="13" fill={colorMapping[property]} clip-rule="evenodd"></path>
                      </svg>
                    </div>

                    <h3 className="text-gray-700 text-lg font-semibold mb-1">{mappedProperty}</h3>
                    <p className="text-black font-extrabold text-3xl">{valueWithSuffix}</p>
                    <h3 className="text-gray-700 text-lg font-semibold mb-1">{nextProperty[0]}</h3>
                    <p className="text-black font-extrabold text-3xl">{nextValueWithSuffix}</p>
                  </div>
                );
                arr.splice(arr.indexOf(nextProperty), 1); // remove the next property from the array
              }
            } else {
              acc.push(
                <div key={property} className="card bg-white rounded-lg shadow-md p-6 mb-4">
                  <h3 className="text-gray-700 text-lg font-semibold mb-1">{mappedProperty}</h3>
                  <p className="text-black font-extrabold text-3xl">{valueWithSuffix}</p>
                </div>
              );

            }
            return acc;
          }, [])}
        </div>
      ))}
    </div>
  );
}
export { firebaseConfig };
export default Fetch;