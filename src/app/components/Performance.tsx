"use client";

import { MoreHorizontal } from 'lucide-react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 71, fill: "#65b8e9" },
  { name: 'Group B', value: 29, fill: "#FAE27C" },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
];


const Performance = () => {
  return (
    <div className='relative bg-white p-4 rounded-md h-80 mb-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Performance</h1>
            <MoreHorizontal />
        </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            fill="#8884d8"
            
          />
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-[40px] font-semibold'>9.2</h1>
        <p className='text-xs text-gray-600'>Lorem ipsum</p>
      </div>
      <h2 className='absolute bottom-16 left-0 right-0 m-auto text-center '>
        First Semester - Second Semester
      </h2>
    </div>
  )
}

export default Performance
