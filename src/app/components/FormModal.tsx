"use client";

import { Delete, Pencil, Plus } from 'lucide-react';
import React from 'react'

const FormModal = ({table, type, data, id}: {
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
    type: "create" | "update" | "delete" ;
    data?: any;
    id?: number;
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type === "create" ? "bg-green-400" : type === "update" ? "bg-blue-400" : type === "delete" ? "bg-red-400" : null;
    const icon = type === "create" ? <Plus /> : type === "update" ? <Pencil /> : type === "delete" ? <Delete /> : "null";
  return (
    <button className={`${size} ${bgColor} flex items-center justify-center rounded-full p-1`}>
        {icon}
    </button>
  )
}

export default FormModal
