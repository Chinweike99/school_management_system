"use client";

import { MoreHorizontal } from 'lucide-react';
import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 2398,
    amt: 2210,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,

  },
  {
    name: 'April',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    income: 1790,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    income: 4490,
    expense: 2300,
    amt: 2100,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 1300,
    amt: 2100,
  },
  {
    name: 'Aug',
    income: 9490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 6300,
    amt: 2100,
  },
  {
    name: 'Oct',
    income: 5790,
    expense: 3300,
    amt: 2100,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 6490,
    expense: 1300,
  },
];


const FinanceChart = () => {
  return (
    <div className='bg-white w-full h-full rounded-xl p-4'>
        <div className='flex justify-between items-center py-3'>
            <h1 className='font-semibold text-lg'>Finance</h1>
            <MoreHorizontal />
        </div>
      
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
                    <Legend  align='center' verticalAlign='top' wrapperStyle={{paddingBottom: "30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#65b8e9" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#566470" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart
