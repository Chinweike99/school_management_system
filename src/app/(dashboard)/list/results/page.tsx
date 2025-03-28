"us client";

import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { resultsData, role, teachersData } from "@/lib/data";
import { Bell, Delete, Plus, Search, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Results = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: "exam" | "assignment";
  score: number;
}

const columns = [
  {
    header: "Subject",
    accessor: "subject"
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    header: "Student",
    accessor: "student",
    className: "hidden md:table-cell"
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell"
  },
  {
    header: "Type",
    accessor: "type",
    className: "hidden lg:table-cell"
  },
  {
    header: "Score",
    accessor: "score",
  },
  {
    header: "Action",
    accessor: "action",
  },
]


const ResultsListPage = () => {


  const renderRow = (item: Results) => (
    <tr key={item.id} className="flex items-center justify-between py-3 even:bg-[#cad1d0] hover:bg-[#c9e9d3] cursor-pointer ">
      {/* */}
        <td className="hidden md:table-cell ">{item.subject}</td>
        <td className="hidden md:table-cell ">{item.class}</td>
        <td className="hidden md:table-cell ">{item.teacher}</td>
        <td className="hidden md:table-cell ">{item.student}</td>
        <td className="hidden md:table-cell ">{item.date}</td>
        <td className="hidden md:table-cell ">{item.type}</td>
        <td className="hidden md:table-cell ">{item.score}</td>
        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
              <FormModal table="result" type="update" />
               <FormModal table="result" type="delete" />
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
          <h1 className="p-1 h-8 rounded-full px-4 bg-[#afb7c1]">All Results</h1>
          <div className="flex flex-1 max-w-[800px]  items-center justify-end gap-3">
              <div className=" w-full">
              <TableSearch />
              </div>            
              <Bell className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
              {role === "admin" && 
              <FormModal table="lesson" type="create" />
                }
          </div>
        </div>

          <Table columns={columns} renderRow={renderRow} data={resultsData}/>

         {/* Paginaiton */}
         <div>
            <Pagination />
          </div>
      </div>
    </div>
  );
};

export default ResultsListPage;
