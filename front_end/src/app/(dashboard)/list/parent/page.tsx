"us client";

import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { parentsData, role, teachersData } from "@/lib/data";
import { Bell, Delete, Filter, Plus, Search, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Parent = {
  id: number;
  name: string;
  // parentId: string;
  email?: string;
  // photo: string;
  phone: string;
  students: string[];
  address: string;
}

const columns = [
  {
    header: "Info",
    accessor: "Info"
  },
  {
    header: "Students name",
    accessor: "parentId",
    className: "hidden md:table-cell"
  },
  // {
  //   header: "Classes",
  //   accessor: "classes",
  //   className: "hidden md:table-cell"
  // },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
  },
]


const ParentListPage = () => {


  const renderRow = (item: Parent) => (
    <tr key={item.id} className="flex items-center justify-between py-3 even:bg-[#cad1d0] hover:bg-[#c9e9d3] cursor-pointer ">
      <td className="flex gap-2">
        {/* <Image src={item.photo} alt="Teacher photo" width={40} height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-400">{item?.email}</p>
        </div>
      </td>
        {/* <td className="hidden md:table-cell ">{item.parentId}</td> */}
        {/* <td className="hidden md:table-cell ">{item.subjects.join(",")}</td> */}
        <td className="hidden md:table-cell ">{item.students.join(",")}</td>
        <td className="hidden md:table-cell ">{item.phone}</td>
        <td className="hidden md:table-cell ">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
              <FormModal table="teacher" type="update" data={item}/>
                <FormModal table="parent" type="delete" />
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
          <h1 className="p-1 h-8 rounded-full px-4 bg-[#afb7c1]">All Parents</h1>
          <div className="flex flex-1 max-w-[800px]  items-center justify-end gap-3">
              <div className=" w-full">
              <TableSearch />
              </div>            
              <Bell className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
              <Filter />
              {role === "admin" && 
              // <Plus className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
              <FormModal table="student" type="create"/>
                }
          </div>
        </div>

          <Table columns={columns} renderRow={renderRow} data={parentsData}/>

         {/* Paginaiton */}
         <div>
            <Pagination />
          </div>
      </div>
    </div>
  );
};

export default ParentListPage;
