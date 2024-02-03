'use client'

import { firebaseConfig } from "./fetch";
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const useDatabased = () => {


  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(db);

    const listener = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());

      } else {
        console.log("No data available");
      }

    });

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      off(dbRef, listener);
    };
  }, []);

  return data;
}

export { useDatabased };