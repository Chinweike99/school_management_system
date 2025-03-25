"us client";

import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { announcementsData, role, teachersData } from "@/lib/data";
import { Bell, Delete, Edit, Plus, Search, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
}

const columns = [
  {
    header: "Title",
    accessor: "title"
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    header: "Date",
    accessor: "date",
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


const AnnouncementListPage = () => {


  const renderRow = (item: Announcement) => (
    <tr key={item.id} className="flex items-center justify-between py-3 even:bg-[#cad1d0] hover:bg-[#c9e9d3] cursor-pointer ">
        <td className="hidden md:table-cell ">{item.title}</td>
        <td className="hidden md:table-cell ">{item.class}</td>
        <td className="hidden md:table-cell ">{item.date}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teacher/${item.id}`}>
              <button className="w-7 h-7 flex p-2 items-center justify-center rounded-full  bg-[#b1d2df]">
                <Edit className="h-16 w-16"/>
              </button>
            </Link>
            {role === "admin" && (

              <>
                <FormModal table="announcement" type="update" />
                <FormModal table="announcement" type="delete" />
              </>
            )
            }
          </div>
        </td>
    </tr>
  );


  return (
    <div className="p-5 bg-white flex-1 rounded-2xl my-5">
      <div className="flex flex-col">
        <div className="flex gap-8 justify-between items-center">
          <h1 className="p-1 h-8 rounded-full px-4 bg-[#afb7c1]">Announcents</h1>
          <div className="flex flex-1 max-w-[800px]  items-center justify-end gap-3">
              <div className=" w-full">
              <TableSearch />
              </div>            
              <Bell className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
              {role === "admin" && 
                <FormModal table="announcement" type="create" />
}
          </div>
        </div>

          <Table columns={columns} renderRow={renderRow} data={announcementsData}/>

         {/* Paginaiton */}
         <div>
            <Pagination />
          </div>
      </div>
    </div>
  );
};

export default AnnouncementListPage;