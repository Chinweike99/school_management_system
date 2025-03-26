import { Bell, MessageCircle, Search, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='border border-gray-400 flex flex-1 rounded-full p-2 items-center gap-1 h-8 max-w-[700px]'>
            <Search className='h-5 w-5 text-gray-600'/>
            <input type="search" placeholder='Search'  className='w-full cursor-pointer outline-none border-none'/>
        </div>

        <div className='relative flex items-center gap-4 ml-10'>
            <MessageCircle className=' text-gray-700 cursor-pointer'/>
            <Bell className=' text-gray-600 cursor-pointer'/>
            <span className='absolute top-0 left-12 text-[10px] bg-red-500 text-white rounded-full h-[15px] w-[15px] text-center'>2</span>
            <p className='flex flex-col justify-center items-center leading-4'>
                Name
                <span className=' text-[12px] italic'>Position</span>
            </p>
            <User />
        </div>
      </div>
    </div>
  )
}

export default Navbar
