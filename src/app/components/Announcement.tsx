import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const announcent =[
  {
    id: 1,
    title: "PTA meeting",
    description: "All parents are adviced to attend",
    date: "11 Feb 2025"
  },
  {
    id: 2,
    title: "Indoor Lectureship",
    description: "Educating everyone on financial literacy",
    date: "11 Feb 2025"
  },
  {
    id: 3,
    title: "Building Capacity",
    description: "Becoming the best version of you",
    date: "14 March 2025"
  },
  {
    id: 3,
    title: "PTA meeting",
    description: "All parents are adviced to attend",
    date: "11 Feb 2025"
  },
]

const Announcement = () => {
  return (
    <div>
      <div className='flex justify-between items-center bg-white p-2 rounded-xl'>
        <h1 className='text-2xl font-semibold'>Announcent</h1>
        <MoreHorizontal />
      </div>

      <div className='p-2 flex flex-col gap-2 bg-white my-6 rounded-2xl'>
        {
          announcent.map(info => {
            return(
              <div className='flex flex-col gap-2 p-3 hover:scale-[1.02] duration-700 odd:bg-[#65b8e9] even:bg-[black] even:text-white rounded-2xl'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold'>{info.title}</h1>
                  <span className='text-sm italic bg-white px-3 text-gray-700 rounded-full'>{info.date}</span>
                </div>
                <p>{info.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Announcement
