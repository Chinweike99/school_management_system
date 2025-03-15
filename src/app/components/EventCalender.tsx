"use client";


import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../app/globals.css'


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Wedding ceremony",
        time: "22nd April, 11am",
        description: "Wedding ceremony of my friends friend Chibueze Anya uwa"
    },
    {
        id: 2,
        title: "Wedding ceremony",
        time: "19th March, 4pm",
        description: "Wedding ceremony of my friends friend Chibueze Anya uwa"
    },
    {
        id: 3,
        title: "Wedding ceremony",
        time: "14th July, 2pm",
        description: "Wedding ceremony of my friends friend Chibueze Anya uwa"
    },
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className=''>
      <Calendar onChange={onChange} value={value} 
      />

      <div className='mt-8'>
        <h1 className='font-semibold text-2xl sm:tesxt-xl'>Schedules.</h1>
      </div>
      <div className='flex flex-col gap-3 p-5 bg-[#000000] rounded-xl'>
        {
            events.map(e =>{
                return(
                    <div key={e.id} className='flex flex-col gap-1 hover:text-black rounded-xl hover:bg-white hover:scale-[1.05] transition-all ease-in-out duration-1000 p-5 text-[#fff] border-t-4 odd:border-t-[#65b8e9] even:border-t-[#e8edf0]'>
                        <h1 className='font-semibold text-xl '>{e.title}</h1>
                        <p>{e.description}</p>
                        <div className='self-end mr-4'>
                        <p className='flex text-end italic text-[#8fc2d3]'>{e.time}</p> 
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default EventCalender
