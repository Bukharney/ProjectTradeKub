import React from 'react';
import './AnalyticPage.css'

const Table = ({ columns, rows }) => {
  return (
    <div style={{ position: "absolute", marginLeft: "80px", marginTop: "100px" }}>
      <div className="tableContainer">
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className="tableHeaderBox">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="tableColBox">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Table;
