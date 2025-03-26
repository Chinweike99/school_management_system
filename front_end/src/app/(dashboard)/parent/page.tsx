"use client";


import Announcement from '@/app/components/Announcement'
import BigCalendar from '@/app/components/BigCalendar'
import React from 'react'

const Parentpage = () => {
  return (
    <div className=' flex gap-4 flex-col xl:flex-row mt-5'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
          <div className='h-full bg-white p-4 rounded-2xl'>
            <h1 className='text-xl font-semibold py-3'>Schedule {"{John}"}</h1>
             <BigCalendar />
          </div>
      </div>

    {/* RIGTH */}
      <div className='w-full xl:w-1/2'>
        {/* <EventCalender /> */}
        <Announcement />
      </div>
    </div>
  )
}

export default Parentpage;