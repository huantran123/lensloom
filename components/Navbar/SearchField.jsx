'use client'

import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {Search as SearchIcon} from 'react-feather'
import cls from 'classnames'
// states
import searchTextState from '@states/searchTextState'

const SearchField = ({className}) => {
  const [searchText, setSearchText] = useRecoilState(searchTextState)

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <form className={cls(className, 'relative w-1/2 flex-center max-w-lg')}>
      <input
        type="text"
        placeholder='Search'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input'
      />

      {/* Search icon */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SearchIcon
          className="w-5 h-5 text-gray-400"
          width={20}
          height={20}
        />
      </div>
    </form>
  )
}

export default SearchField