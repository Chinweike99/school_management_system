import Attendance from '@/app/components/AttendanceChart'
import Countcharts from '@/app/components/Countcharts'
import UserCard from '@/app/components/UserCard'
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

const Adminpage = () => {
  return (
    <div className=' flex gap-4 flex-col md:flex-row mt-5'>
      <div className='flex flex-col w-full lg:w-2/3  gap-5'>
        <div className=''>

          <div className='flex gap-4 justify-between flex-wrap'>
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>
        </div>

        {/* MIDDLE CHART */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
          <Countcharts />
          
          </div>
          <div className='w-full lg:w-2/3 h-[450px]'>
          <Attendance />
          </div>
        </div>

        <div></div>
      </div>

      <div className='w-full lg:w-1/3'>
        RIGHT
      </div>

    </div>
  )
}

export default Adminpage