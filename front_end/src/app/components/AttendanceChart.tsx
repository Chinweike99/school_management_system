"use client";

import { MoreHorizontal } from 'lucide-react';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
  {
    name: 'Mon',
    present: "70",
    absent: "30"
  },
  {
    name: 'Tue',
    present: "50",
    absent: "50"
  },
  {
    name: 'Wed',
    present: "30",
    absent: "50"
  },
  {
    name: 'Thu',
    present: "80",
    absent: "50"
  },
  {
    name: 'Fri',
    present: "70",
    absent: "50"
  },
];


const Attendance = () => {
  return (
    <div className='bg-white h-full p-4 rounded-lg'>

      <div className='flex justify-between items-center py-2'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <MoreHorizontal />
      </div>

      <ResponsiveContainer width="100%" height="75%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend  align='left' verticalAlign='top' wrapperStyle={{paddingBottom: "30px"}}/>
          <Bar dataKey="present" fill="#65b8e9" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' />
          <Bar dataKey="absent" fill="#566470" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType='circle' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Attendance
