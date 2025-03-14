import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const UserCard = ({type}: {type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-[#566470] even:bg-blue-400 p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-gray-300 px-2 py-1 rounded-full '>
            15/2025
        </span>
        <MoreHorizontal />
      </div>
      <h1 className='text-2xl font-semibold my-6'>2,000</h1>
      <h2 className='capitalize text-sm font-medium text-gray-300'>{type}s</h2>
    </div>
  )
}

export default UserCard
