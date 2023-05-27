import React from "react";
import "./GovernmentView.css";

export const text = {};

const Table = ({ columns, rows }) => {
  return (
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
  );
};

export default Table;