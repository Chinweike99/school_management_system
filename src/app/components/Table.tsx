"use client";

import React from 'react'

const Table = ({columns, }: {columns: {header: string; accessor: string; className?: string}[];}) => {
  return (
    <table className='w-full mt-4'>
        <thead>
            <tr className='text-left text-gray-700 text-base flex'>
                {columns.map((col, i) => {
                    return(
                        <div key={col.accessor}>
                            <th >
table                      {col.header}
                            </th>
                        </div>
                    )
                })}
            </tr>
        </thead>
    </table>
  )
}

export default Table
