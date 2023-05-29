import React from "react";

const TableMapping = ({ data }) => {
  if (data.length === 0) {
    return <div className="text-center">No Data</div>;
  }

  const tableData = data.map((item, index) => {
    const fields = Object.keys(item);

    return (
      <tr key={index} className="odd:bg-zinc-800 even:bg-zinc-900">
        {fields.map((field, idx) => (
          <td key={idx} class="p-2 text-center">
            {item[field] === null ? "N/A" : item[field]}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="min-h-full">
      <table className="w-full">
        <thead>
          <tr className="">
            {Object.keys(data[0]).map((field, index) => (
              <th
                key={index}
                className="p-2 text-center  odd:bg-zinc-600 even:bg-zinc-500"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default TableMapping;
