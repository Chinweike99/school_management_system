"use client";

import { Delete, Eye, Pencil, Plus, X } from 'lucide-react';
import React, { useState } from 'react'
import TeacherForm from './form/TeacherForm';

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
    ) :(
      // "Create or update"
      <TeacherForm type='create' />
    )
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
      ) : openModal && type === "delete" ? (
        <div className='w-screen h-screen absolute left-0 top-0 bg-opacity-50 bg-black/35 z-50 flex items-center justify-center'>
          <div className='relative bg-white p-4 rounded-md w-[90%] md:w-[70%] '>
            
            <button onClick={()=>setOpenModal(false)} className='absolute top-2 right-2 pb-3 cursor-pointer'><X/> </button>
            <Form />
          </div>
        </div>
      ) : null
    }
    </>
  )
}

export default FormModal
