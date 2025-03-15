"use client";


import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../app/globals.css'


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className=''>
      <Calendar onChange={onChange} value={value} 
    //   className={"w-full"}
      />
    </div>
  )
}

export default EventCalender
