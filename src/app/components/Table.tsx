// "use client";

// import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full flex flex-col  mt-4">
      <thead className="">
        <tr className="flex justify-between  text-gray-700 text-base ">
          {columns.map((col, i) => {
            return <th key={col.accessor}>{col.header}</th>;
          })}
        </tr>
      </thead>
      <tbody  className="flex flex-col text-left  text-gray-700 text-base ">
        {
            data.map((item) => renderRow(item))
        }
      </tbody>
    </table>
  );
};

export default Table;
