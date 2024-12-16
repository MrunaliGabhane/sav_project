import React from 'react'

export const SearchBox = ({handleSearch,searchTerm }) => {
  return (
    <div className="flex items-center gap-4 mb-6 w-full">
        <input
        type='text'
        onChange={(e) => handleSearch(e.target.value)}
        value={searchTerm}
        placeholder='Search'
        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-600'
        />
    </div>
  )
}
