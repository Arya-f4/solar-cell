import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { firebaseConfig } from "./dashboard";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Graphic({ data }) {
  const [chartData1, setChartData1] = useState({
    datasets: [],
  });

  const [chartData2, setChartData2] = useState({
    datasets: [],
  });

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const fetchData = async () => {
      try {
        const querySnapshotStatis = await getDocs(collection(db, "Statis_Solar"));
        const querySnapshotSolar = await getDocs(collection(db, "Solar"));

        const fetchedDataStatis = querySnapshotStatis.docs.map(doc => doc.data());
        const fetchedDataSolar = querySnapshotSolar.docs.map(doc => doc.data());

        const timeStatis = fetchedDataStatis.map(item => item.Time);
        const voltageStatis = fetchedDataStatis.map(item => item.Voltage);
        const powerStatis = fetchedDataStatis.map(item => item.Power);
        const currentStatis = fetchedDataStatis.map(item => item.Current);

        const timeSolar = fetchedDataSolar.map(item => item.Time);
        const voltageSolar = fetchedDataSolar.map(item => item.Voltage);
        const powerSolar = fetchedDataSolar.map(item => item.Power);
        const currentSolar = fetchedDataSolar.map(item => item.Current);

        setChartData1({
          labels: timeStatis,
          datasets: [
            {
              label: 'Voltage (V)',
              data: voltageStatis,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Power (W)',
              data: powerStatis,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
              label: 'Current (A)',
              data: currentStatis,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        });

        setChartData2({
          labels: timeSolar,
          datasets: [
            {
              label: 'Voltage (V)',
              data: voltageSolar,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Power (W)',
              data: powerSolar,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
              label: 'Current (A)',
              data: currentSolar,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold text-gray-800 mb-4">Statis Solar</h1>
      <div className="p-4 bg-white rounded-lg shadow-md" style={{ width: '100%', height: '500px' }}>
        <Line data={chartData1} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <h1 className="text-xl font-bold text-gray-800 mb-4">Solar</h1>
      <div className="p-4 bg-white rounded-lg shadow-md" style={{ width: '100%', height: '500px' }}>
        <Line data={chartData2} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </>
  );
}

export default Graphic;

