import React from 'react';
import './AnalyticPage.css'

const Table = ({ columns, rows }) => {
  return (
    <div style={{ position: "absolute", marginLeft: "80px", marginTop: "100px" }}>
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
            {rows.slice(0, 10).map((row, rowIndex) => {
              const isFirstColumnEmpty = rowIndex > 0 && row[0] === rows[rowIndex - 1][0];
              const isGroupSeparator = rowIndex > 0 && row[0] !== rows[rowIndex - 1][0];

              return (
                <React.Fragment key={rowIndex}>
                  {isGroupSeparator && (
                    <tr>
                      {Array(columns.length).fill('').map((_, index) => (
                        <td key={`separator-${index}`} className="tableColBox">&nbsp;</td>
                      ))}
                    </tr>
                  )}
                  <tr>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="tableColBox">
                        {cellIndex === 0 && isFirstColumnEmpty ? '' : cell}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
