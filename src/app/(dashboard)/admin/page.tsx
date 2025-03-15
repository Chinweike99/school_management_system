import Announcement from '@/app/components/Announcement'
import Attendance from '@/app/components/AttendanceChart'
import Countcharts from '@/app/components/Countcharts'
import EventCalender from '@/app/components/EventCalender'
import FinanceChart from '@/app/components/FinanceChart'
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

        <div className='w-full  h-[450px]'>
        <FinanceChart />
        </div>
      </div>

      <div className='w-full lg:w-1/3 flex flex-col gap-6'>
        <EventCalender />
        <Announcement />
      </div>

    </div>
  )
}

export default Adminpage