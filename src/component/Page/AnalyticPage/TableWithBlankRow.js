import React from 'react';
import './AnalyticPage.css'

const TableWithBlankRow = ({ columns, rows }) => {
  return (

   <div className="tableContainer">
  <table>
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index} className="tableHeaderBox">
            {column}
          </th>
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
  
  );
};

export default TableWithBlankRow;
