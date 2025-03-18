"us client";

import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role, subjectsData, teachersData } from "@/lib/data";
import { Bell, Delete, Plus, Search, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Subject = {
  id: number;
  name: string;
  // subject: string;
  teachers: string[];
}

const columns = [
  // {
  //   header: "Info",
  //   accessor: "Info"
  // },
  {
    header: "Teachers",
    accessor: "subjectId",
    className: "hidden md:table-cell"
  },
  {
    header: "Subjects",
    accessor: "SubjectsId",
    className: "hidden md:table-cell"
  },
  // {
  //   header: "Classes",
  //   accessor: "classes",
  //   className: "hidden md:table-cell"
  // },
  // {
  //   header: "Phone",
  //   accessor: "phone",
  //   className: "hidden lg:table-cell"
  // },
  // {
  //   header: "Address",
  //   accessor: "address",
  //   className: "hidden lg:table-cell"
  // },
  {
    header: "Actions",
    accessor: "action",
  },
]


const SubjectListPage = () => {


  const renderRow = (item: Subject) => (
    <tr key={item.id} className="flex items-center justify-between py-3 even:bg-[#cad1d0] hover:bg-[#c9e9d3] cursor-pointer ">
      
        <td className="hidden md:table-cell ">{item.teachers.join(",")}</td>
        <td className="hidden md:table-cell ">{item.name}</td>
        {/* <td className="hidden md:table-cell ">{item.classes.join(",")}</td>
        <td className="hidden md:table-cell ">{item.phone}</td>
        <td className="hidden md:table-cell ">{item.address}</td> */}
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teacher/${item.id}`}>
              <button className="w-7 h-7 flex p-2 items-center justify-center rounded-full  bg-[#b1d2df]">
                <View className="h-16 w-16"/>
              </button>
            </Link>
            {role === "admin" &&
            <button className="w-7 h-7 flex p-2 items-center justify-center rounded-full  bg-[#e53232]">
                <Delete className="h-16 w-16"/>
              </button>
            }
          </div>
        </td>
    </tr>
  );


  return (
    <div className="p-5 bg-white flex-1 rounded-2xl my-5">
      <div className="flex flex-col">
        <div className="flex gap-8 justify-between items-center">
          <h1 className="p-1 h-8 rounded-full px-4 bg-[#afb7c1]">All Teachers</h1>
          <div className="flex flex-1 max-w-[800px]  items-center justify-end gap-3">
              <div className=" w-full">
              <TableSearch />
              </div>            
              <Bell className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
              {role === "admin" && 
              <Plus className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
                }
          </div>
        </div>

          <Table columns={columns} renderRow={renderRow} data={subjectsData}/>

         {/* Paginaiton */}
         <div>
            <Pagination />
          </div>
      </div>
    </div>
  );
};

export default SubjectListPage;
