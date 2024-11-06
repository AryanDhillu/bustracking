import React, { useState } from 'react';
import ExcelTable from './ExcelTable';

function App() {
  // State to track which button was clicked
  const [showTable, setShowTable] = useState(null);

  // Handler function for button clicks
  const handleButtonClick = (buttonNumber) => {
    setShowTable(buttonNumber);
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-10">
      <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
        Bus Tracker
      </h1>

      {/* Buttons to trigger showing the Excel table */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => handleButtonClick(1)}
        >
          Tirupati to hyderabad
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => handleButtonClick(2)}
        >
          Goa to Vijayawada
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => handleButtonClick(3)}
        >
          Bengaluru to Mumbai
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => handleButtonClick(4)}
        >
          Chennai to Madhurai
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transform transition duration-300 hover:scale-105"
          onClick={() => handleButtonClick(5)}
        >
          CBIT RTC
        </button>
      </div>

      {/* Conditionally render ExcelTable based on which button was clicked */}
      {showTable && (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            BUS {showTable}
          </h2>
          <ExcelTable />
        </div>
      )}
    </div>
  );
}

export default App;
