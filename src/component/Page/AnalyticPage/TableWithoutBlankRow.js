import React from "react";
import "./AnalyticPage.css";

const Table = ({ columns, rows }) => {
  return (
    <div>
      <table className="GovernmentView__table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="Analytic__tableHeaderBox">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="GovernmentView__tableColBox">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
