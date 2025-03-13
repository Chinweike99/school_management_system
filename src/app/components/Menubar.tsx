import { BookCheck, BookCopy, BookOpenCheck, CalendarDays, GraduationCap, House, LogOut, Mail, Mailbox, School, Settings, Shapes, UserCheck, UserPen, Users, Workflow } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const menuItem = [
    {
        title: "Menu",
        items: [
            {
                icon: <School />,
                label: "Home",
                url: "/"
            },
            {
                icon: <BookCopy />,
                label: "Teachers",
                url: "/teacher"
            },
            {
                icon: <GraduationCap />,
                label: "Students",
                url: "/students"
            },
            {
                icon: <Users />,
                label: "Parents",
                url: "/parents"
            },
            {
                icon: <Shapes />,
                label: "Classroom",
                url: "/class"
            },
            {
                icon: <BookOpenCheck />,
                label: "Lesson",
                url: "/lesson"
            },
            {
                icon: <BookCheck />,
                label: "Exams",
                url: "/exam"
            },
            {
                icon: <Workflow />,
                label: "Assignment",
                url: "/assignment"
            },
            {
                icon: <UserCheck />,
                label: "Attendance",
                url: "/attendance"
            },
            {
                icon: <CalendarDays />,
                label: "Calender",
                url: "/calender"
            },
            {
                icon: <Mail />,
                label: "Message",
                url: "/message"
            },
            {
                icon: <Mailbox />,
                label: "Announcement",
                url: "/anoouncement"
            },
        ]
    },
    {
        title: "Others",
        items: [
            {
                icon: <UserPen />,
                label: "Profile",
                url: "/profile"
            },
            {
                icon: <Settings />,
                label: "Settings",
                url: "/settings"
            },
            {
                icon: <LogOut />,
                label: "Log-out",
                url: "/logout"
            },
        ]
    }
]


const Menubar = () => {
  return (
    <div>
      <div className='mt-4'>
        {
            menuItem.map((item, index) => {
                return (
                    <div key={index} className='flex text-base flex-col items-start p-2 justify-center'>
                        <span className=''>{item.title}</span>
                        {
                            item.items.map((i, index) => {
                                return(
                                    <Link href={i.url} key={index} className='w-full flex gap-4 p-2 hover:bg-gray-200 hover:border-t hover:border-gray-400 rounded-lg text-sm  '>
                                        {/* <Image src={`${i.icon}`} alt={`${i.label}`} height={20} width={20}/> */}
                                        <span className='h-3 w-3 text-gray-600'>{i.icon}</span>
                                        <span className='mt-[1p] hidden lg:block'>{i.label}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Menubar
