import Image from 'next/image'
import React from 'react'
import tempImage from '../../../../../../public/tempImage.jpg'
import { Calendar, Mail, Phone, PopsicleIcon } from 'lucide-react'

const SingleTeacherPage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
            {/* LEFt */}
            <div className='w-full xl:w2/3'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='bg-[#65b8e9] py-6 px-4 rounded-md flex flex-1 gap-4'>
                        <div className='w-1/3'>
                            <Image src={tempImage} alt='teacher' width={100} height={100} className='w-36 h-36 rounded-full object-cover' />
                        </div>
                        <div className='w-2/3 flex flex-col justify-between gap-4'>
                            <p className='font-semibold'>Name</p>
                            <span className='text-sm text-[#30484e]'>description</span>
                            <div className='flex flex-wrap justify-between lg:justify-between gap-2 text-[#30484e]'>
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

                    <div className='flex-1'></div>
                </div>
                {/* BOTTOM */}
                <div className=''>Schedule</div>
            </div>

            {/* RIGHT */}
            <div className='w-full xl:w-1/2'>Right</div>
        </div>
    )
}

export default SingleTeacherPage
