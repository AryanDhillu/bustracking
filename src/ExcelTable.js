import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Automatically fetch and parse the Excel file from the public folder
    fetch('/Telangana_coordinates.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setData(jsonData);
      })
      .catch((error) => console.error("Error loading Excel file:", error));
  }, []);

  return (
    <div>
      <h1>Excel Data Display</h1>
      <table border="1" style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Time</th>
            <th>Area Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["Latitude"]}</td>
              <td>{row["Longitude"]}</td>
              <td>{row["Time"]}</td>
              <td>{row["Area Name"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTable;
