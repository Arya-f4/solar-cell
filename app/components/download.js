'use client'

import { firebaseConfig } from "./dashboard";
import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useDatabase = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Solar"));
        const fetchedData = querySnapshot.docs.map(doc => {
          const docData = doc.data();

          // Perform operation on each document data
          // For example, let's log the data
          console.log(docData);

          return docData;
        });
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return data;
};


export { useDatabase };