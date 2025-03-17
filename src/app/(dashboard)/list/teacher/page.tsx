import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { Bell, Plus, Search } from "lucide-react";
import React from "react";


const columns = [
  {
    header: "Info",
    accessor: "Info"
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell"
  },
  {
    header: "Subjects",
    accessor: "Subjects",
    className: "hidden md:table-cell"
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell"
  },
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


const TeacherListPage = () => {
  return (
    <div className="p-5 bg-white rounded-2xl h-full my-5">
      <div className="flex flex-col">
        <div className="flex gap-8 justify-between items-center">
          <h1 className="p-1 h-8 rounded-full px-4 bg-[#afb7c1]">All Teachers</h1>
          <div className="flex flex-1 max-w-[800px]  items-center justify-end gap-3">
            {/* <div className="border flex-1  border-gray-400 p-2 rounded-full flex items-center justify-center gap-2">
              <Search className="h-5 text-gray-500" />
              <input
                type="search"
                placeholder="Search a teacher"
                className="outline-none w-full"
              />
            </div> */}
              <div className=" w-full">
              <TableSearch />
              </div>            
              <Bell className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
              <Plus className="h-7 w-7 text-gray-500 bg-[#3aaade] p-1 rounded-full" />
            
          </div>
        </div>

          <Table columns={columns}/>
         {/* Paginaiton */}
         <div>
            <Pagination />
          </div>
      </div>
    </div>
  );
};

export default TeacherListPage;
