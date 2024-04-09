'use client'
// DATA STATIS COMPONENT
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import { firebaseConfig } from "./dashboard";
import firestore from 'firebase/firestore';
import ReactPaginate from 'react-paginate';
import { saveAs } from 'file-saver';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Dataflex() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Solar"));

        const fetchedData = querySnapshot.docs.map(doc => doc.data());
        setData(fetchedData);
        setPageCount(Math.ceil(fetchedData.length / pageSize));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  const handlePageChange = (event) => {
    const newOffset = (event.selected * pageSize) % data.length;
    setItemOffset(newOffset);
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    setItemOffset(0);
    setPageCount(Math.ceil(data.length / newPageSize));
  };

  const handleSortOrderChange = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedData = data.sort((a, b) => {
    const timeA = new Date(a.Time);
    const timeB = new Date(b.Time);
    return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
  });

  const endOffset = itemOffset + pageSize;
  const currentData = sortedData.slice(itemOffset, endOffset);

  const exportToCSV = () => {
    let csvContent = "Time,X_axis_angle (deg),Y_axis_angle (deg),Power (W),Energy (W),Current (A),Voltage (V)\n";
    currentData.forEach((item) => {
      csvContent += `${item.Time},${item['X_axis_angle']} deg,${item['Y_axis_angle']} deg,${item.Power} W,${item.Energy} W,${item.Current} A,${item.Voltage} V\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'solar_data.csv');
  };
  const showAllData = () => {
    setPageSize(data.length); z
    setPageCount(1);
    setItemOffset(0);
  };

  return (
    <div className="w-full overflow-auto">
      <div className="mt-4 flex items-center">
        <span className="text-gray-700 mr-2">Items per page:</span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="ml-2 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={-1}>Show all</option>

        </select>
        <button
          className="ml-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={exportToCSV}
        >
          Download CSV
        </button>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-4"
        pageLinkClassName="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray:100 hover:text-gray-700 rounded-md"
        previousLinkClassName="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md"
        nextLinkClassName="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md"
        activeLinkClassName="block px-3 py-2 leading-tight text-black bg-indigo-500 border border-indigo-500 rounded-md"
        breakLinkClassName="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 active:bg-blue-100 hover:text-gray-700 rounded-md"
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Time
              <button
                className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                onClick={handleSortOrderChange}
              >
                {sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              X_axis_angle (deg)
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Y_axis_angle (deg)
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Power (W)
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Energy (W)
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Current (A)
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Voltage (V)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">{itemOffset + index + 1}</div>
              </td><td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">{item.Time}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">
                  {item['X_axis_angle']} deg
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">
                  {item['Y_axis_angle']} deg
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">{item.Power} W</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">{item.Energy} W</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">{item.Current} A</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-xl text-gray-900">{item.Voltage} V</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}
export { db };
export default Dataflex;