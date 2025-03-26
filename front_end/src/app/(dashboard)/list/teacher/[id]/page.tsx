import Image from 'next/image'
import React from 'react'
import tempImage from '../../../../../../public/tempImage.jpg'
import { BrainCircuit, Calendar, House, Mail, Notebook, PersonStandingIcon, Phone, PopsicleIcon } from 'lucide-react'
import BigCalendar from '@/app/components/BigCalendar'
import Link from 'next/link'
import Announcement from '@/app/components/Announcement'
import Performance from '@/app/components/Performance'
import FormModal from '@/app/components/FormModal'

const SingleTeacherPage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
            {/* LEFt */}
            <div className='w-full xl:w-2/3'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='bg-[#65b8e9] py-6 px-4 rounded-md flex flex-1 gap-4'>
                        <div className='w-1/3'>
                            <Image src={tempImage} alt='teacher' width={100} height={100} className='w-36 h-36 rounded-full object-cover' />
                        </div>
                        <div className='w-2/3 flex flex-col justify-between gap-4'>
                            <p className='font-semibold'>Name</p>
                            <FormModal 
                            table='teacher'
                            type='create'
                            data={[{
                                id: 1,
                                username: "Angelau",
                                email: "yu@gmail.com",
                                firstName: "Angela",
                                lastName: "Uohane",
                                phone: "+234 908877098 78",
                                address: "no 10, azikiwe road, Lagos",
                                bloodType: "As",
                                dateOfBirth: "2000-03-09",
                                sex: "male",
                                imag: ""
                            }]}
                            />
                            <span className='text-sm text-[#30484e]'>description</span>
                            <div className='flex flex-wrap justify-between text-xs gap-2 text-[#30484e]'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2 text-sm '>
                                        <PopsicleIcon className=' h-5 w-5 ' />
                                        <span>A+</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm '>
                                        <Calendar className=' h-5 w-5 ' />
                                        <span>Feb 2025</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <Mail />
                                        <span>teacher@gmail.com</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <Phone />
                                        <span>+243 90458908</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[47%]'>
                            <PersonStandingIcon />
                            <div>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'>Attendance</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[47%]'>
                            <BrainCircuit />
                            <div>
                                <h1 className='text-xl font-semibold'>2</h1>
                                <span className='text-sm text-gray-400'>Branch</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[47%]'>
                            <Notebook />
                            <div>
                                <h1 className='text-xl font-semibold'>6</h1>
                                <span className='text-sm text-gray-400'>Lessons</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[47%]'>
                            <House />
                            <div>
                                <h1 className='text-xl font-semibold'>6</h1>
                                <span className='text-sm text-gray-400'>Classes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                    <h1>Teacher&apos;s Schedule</h1>
                  <BigCalendar />
                </div>
            </div>

            {/* RIGHT */}
            <div className='w-full xl:w-1/3'>
                <div className='bg-white p-4 rounded-md mb-4'>
                    <h1 className='text-xl font-semibold'>Shortcuts</h1>
                    <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                        {/* <Link href={'/'} className='p-3 rounded-md bg-green-400 text-white'>Teacher&apos;s Classes</Link> */}
                        <Link href={'/'} className='p-3 rounded-md bg-amber-400 text-white'>Teacher&apos;s Students</Link>
                        <Link href={'/'} className='p-3 rounded-md bg-blue-400 text-white'>Teacher&apos;s Lessons</Link>
                        <Link href={'/'} className='p-3 rounded-md bg-gray-400 text-white'>Teacher&apos;s Exams</Link>
                        <Link href={'/'} className='p-3 rounded-md bg-red-400 text-white'>Teacher&apos;s Assignment</Link>
                        <Link href={'/'} className='p-3 rounded-md bg-purple-400 text-white'>Teacher&apos;s Classes</Link>
                    </div>
                </div>
                <Performance />
                <Announcement />
            </div>
        </div>
    )
}

export default SingleTeacherPage
