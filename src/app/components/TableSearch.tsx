import { Search } from 'lucide-react'
import React from 'react'

const TableSearch = () => {
  return (
    <div>
        <div className="border flex-1 w-full  border-gray-400 p-2 rounded-full flex items-center justify-center gap-2">
              <Search className="h-5 text-gray-500" />
              <input
                type="search"
                placeholder="Search a teacher"
                className="outline-none w-full"
              />
            </div>
            
    </div>
  )
}

export default TableSearch
            