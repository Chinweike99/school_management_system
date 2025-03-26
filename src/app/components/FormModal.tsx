"use client";

import { Delete, Eye, Plus, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
// import TeacherForm from './form/TeacherForm';
// import StudentForm from './form/studentForm';

const TeacherForm = dynamic(() => import('./form/TeacherForm'), {
  loading: () => 
  <h1 className='bg-gray-300 bg-opacity-30 p-10'>
    Loading...
  </h1>
})
const StudentForm = dynamic(() => import('./form/studentForm'), {
  loading: () => 
  <h1 className='bg-gray-300 bg-opacity-30 p-10'>
    Loading form...
  </h1>
})

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};



const FormModal = ({ table, type, data, id }: {
  table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
  const bgColor = type === "create" ? "bg-green-400" : type === "update" ? "bg-blue-400" : type === "delete" ? "bg-red-400" : null;
  const icon = type === "create" ? <Plus /> : type === "update" ? <Eye /> : type === "delete" ? <Delete /> : "null";

  const [openModal, setOpenModal] = useState(false)

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className='p-4 flex flex-col gap-4'>
          <span>All data would be lost. Are you sure you want to delete {table} ?</span>
          <button className='bg-red-400 text-white p-2 rounded-md border-none w-[50%] min-w-[200px] self-center'>Delete</button>
      </form>
    ) : type === "create" || type === "update" ?(
      // "Create or update"
      // <TeacherForm type='update' data={data}/>
      forms[table]( type, data)
    ) : "Form does not exist"
  }

  return (
    <>
      <button onClick={()=>setOpenModal(true)} className={`${size} ${bgColor} flex items-center justify-center rounded-full p-1`}>
      {icon}
    </button>
    
    {
      openModal && type === "create" ? (
        <div className='w-screen h-screen absolute left-0 top-0 bg-opacity-50 bg-black/35 z-50 flex items-center justify-center'>
          <div className='relative bg-white p-4 rounded-md w-[90%] md:w-[70%] '>
            <Form />
            <button onClick={()=>setOpenModal(false)} className='absolute top-2 right-2 pb-3 cursor-pointer'><X/> </button>
           <div className='mt-3'>
           {/* Wecolme */}
           </div>
          </div>
        </div>
      ) :  openModal && type === "delete" && (
        <div className='w-screen h-screen absolute left-0 top-0 bg-opacity-50 bg-black/35 z-50 flex items-center justify-center'>
          <div className='relative bg-white p-4 rounded-md w-[90%] md:w-[70%] '>
            
            <button onClick={()=>setOpenModal(false)} className='absolute top-2 right-2 pb-3 cursor-pointer'><X/> </button>
            <Form />
          </div>
        </div>
      )
    }
    </>
  )
}

export default FormModal
