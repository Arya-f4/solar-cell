// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';
// import firebase, { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import { firebaseConfig } from "./dashboard";



// firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);

// function Table() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Solar"));
//         const fetchedData = querySnapshot.docs.map(doc => doc.data());
//         setData(fetchedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="overflow-x-auto">
//       <h2 className="text-2xl font-bold mb-4">Power Over Time</h2>
//       <LineChart
//         width={600}
//         height={300}
//         data={data}
//         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//       >
//         <XAxis dataKey="Time" />
//         <YAxis />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="Power" stroke="#8884d8" activeDot={{ r: 8 }} />
//       </LineChart>
//     </div>
//   );
// }
