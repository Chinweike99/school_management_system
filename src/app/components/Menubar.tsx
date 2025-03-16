import { role } from '@/lib/data';
import { BookCheck, BookCopy, BookOpenCheck, CalendarDays, GraduationCap, House, LogOut, Mail, Mailbox, School, Settings, Shapes, Sheet, TestTube, UserCheck, UserPen, Users, Workflow } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// const menuItem = [
//     {
//         title: "Menu",
//         items: [
//             {
//                 icon: <School />,
//                 label: "Home",
//                 url: "/"
//             },
//             {
//                 icon: <BookCopy />,
//                 label: "Teachers",
//                 url: "/teacher"
//             },
//             {
//                 icon: <GraduationCap />,
//                 label: "Students",
//                 url: "/student"
//             },
//             {
//                 icon: <Users />,
//                 label: "Parents",
//                 url: "/parent"
//             },
//             {
//                 icon: <Shapes />,
//                 label: "Classroom",
//                 url: "/class"
//             },
//             {
//                 icon: <BookOpenCheck />,
//                 label: "Lesson",
//                 url: "/lesson"
//             },
//             {
//                 icon: <BookCheck />,
//                 label: "Exams",
//                 url: "/exam"
//             },
//             {
//                 icon: <Workflow />,
//                 label: "Assignment",
//                 url: "/assignment"
//             },
//             {
//                 icon: <UserCheck />,
//                 label: "Attendance",
//                 url: "/attendance"
//             },
//             {
//                 icon: <CalendarDays />,
//                 label: "Calender",
//                 url: "/calender"
//             },
//             {
//                 icon: <Mail />,
//                 label: "Message",
//                 url: "/message"
//             },
//             {
//                 icon: <Mailbox />,
//                 label: "Announcement",
//                 url: "/anoouncement"
//             },
//         ]
//     },
//     {
//         title: "Others",
//         items: [
//             {
//                 icon: <UserPen />,
//                 label: "Profile",
//                 url: "/profile",
//                 visible: ["admin", "teacher", "student", "parent"]
//             },
//             {
//                 icon: <Settings />,
//                 label: "Settings",
//                 url: "/settings",
//                 visible: ["admin", "teacher", "student", "parent"]
//             },
//             {
//                 icon: <LogOut />,
//                 label: "Log-out",
//                 url: "/logout",
//                 visible: ["admin", "teacher", "student", "parent"]
//             },
//         ]
//     }
// ]

const menuItem = [
    {
      title: "MENU",
      items: [
        {
          icon: <School />,
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <BookCopy />,
            label: "Teachers",
          href: "/list/teacher",
          visible: ["admin", "teacher"],
        },
        {
            icon: <GraduationCap />,
            label: "Students",
          href: "/student",
          visible: ["admin", "teacher"],
        },
        {
            icon: <Users />,
            label: "Parents",
          href: "/parent",
          visible: ["admin", "teacher"],
        },
        {
          icon: <TestTube />,
          label: "Subjects",
          href: "/list/subjects",
          visible: ["admin"],
        },
        {
            icon: <Shapes />,
            label: "Classroom",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
            icon: <BookOpenCheck />,
            label: "Lesson",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
            icon: <BookCheck />,
            label: "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <Workflow />,
            label: "Assignment",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Sheet />,
          label: "Results",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <UserCheck />,
            label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <CalendarDays />,
            label: "Calender",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <Mail />,
            label: "Message",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <Mailbox />,
            label: "Announcement",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
            icon: <UserPen />,
            label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Settings />,
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
            icon: <LogOut />,
          label: "Log-out",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];


const Menubar = () => {
  return (
    <div>
      <div className='mt-4'>
        {
            menuItem.map((item, index) => {
                return (
                    <div key={index} className='flex text-base flex-col gap-[3px] items-start p-2 justify-center'>
                        <span className=''>{item.title}</span>
                        {
                            item.items.map((i, index) => {

                                if(i.visible.includes(role)){
                                    return(
                                        <Link href={i.href} key={index} className='w-full h-[40px] flex gap-5 p-2 hover:bg-gray-200 hover:border-b hover:border-gray-400 rounded-lg text-sm '>
                                            {/* <Image src={`${i.icon}`} alt={`${i.label}`} height={20} width={20}/> */}
                                            <span className='h-[8px] w-[8px] text-gray-600'>{i.icon}</span>
                                            <span className='mt-[1px] hidden lg:block'>{i.label}</span>
                                        </Link>
                                        
                                    )
                                }
                                
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
