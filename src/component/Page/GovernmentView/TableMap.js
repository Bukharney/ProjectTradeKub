import React from "react";

const TableMapping = ({ data }) => {
  if (data.length === 0) {
    return <div>No Data</div>;
  }

  const tableData = data.map((item, index) => {
    const fields = Object.keys(item);

    return (
      <tr key={index} class="m-10">
        {fields.map((field, idx) => (
          <td key={idx} class="p-5 m-5">
            {item[field]}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="min-h-screen">
      <table>
        <thead>
          <tr class="m-10">
            {Object.keys(data[0]).map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default TableMapping;
