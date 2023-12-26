'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import { Menu as HamburgerIcon } from 'react-feather'
import cls from 'classnames'
import {
  DropdownMenu, DropdownItem,
  Dropdown, DropdownToggle
} from "reactstrap"

const Hamburger = ({ className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown className={cls(className)} isOpen={dropdownOpen} toggle={toggle}>
      {/* toggle */}
      <DropdownToggle className="bg-transparent !border-transparent p-0" >
        <HamburgerIcon
          className="text-gray-600"
          width={20}
          height={20}
        />
      </DropdownToggle>

      {/* menu */}
      <DropdownMenu>
        <DropdownItem>
          <Link href="/" className="no-underline text-gray-600">Feed</Link>
        </DropdownItem>

        <DropdownItem>
          <Link href="/explore" className="no-underline text-gray-600">Explore</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Hamburger