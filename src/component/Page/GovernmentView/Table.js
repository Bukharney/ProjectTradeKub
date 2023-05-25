import React from 'react';
import './GovernmentView.css'

const Table = ({ columns, rows }) => {
  return (
    <div style={{position: "absolute", marginLeft: "80px",marginTop:"20rem"}}>
    <table>
        
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className='tableHeaderBox'>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className='tableColBox'>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
