'use client';

import { MoreHorizontal, User, Users } from 'lucide-react';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: '#fff',
    },
    {
        name: 'Boys',
        count: 71,
        fill: '#566470',
    },
    {
        name: 'Girls',
        count: 54,
        fill: '#65b8e9',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};


const Countcharts = () => {
    return (
        <div className='relative bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-lg'>Student</h1>
                <MoreHorizontal />
            </div>

            {/* Charty */}
            <div className='w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="90%" barSize={15} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>

            <div className='flex absolute  top-2/5 left-1/2 -translate-x-1/2 '>
                <User
                    className='h-[35px] '
                />

                <User
                    className='h-[35px] '
                />
            </div>

            {/* Bottom Chart */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col items-center gap-1'>
                    <div className='w-5 h-5 bg-[#566470] rounded-full' />
                    <h1 className='font-bold'>2,903</h1>
                    <h2 className='text-xs text-gray-500'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='w-5 h-5 bg-[#65b8e9] rounded-full' />
                    <h1 className='font-bold'>2,903</h1>
                    <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default Countcharts
