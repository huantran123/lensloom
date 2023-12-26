import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cls from 'classnames'
import {
  DropdownMenu, DropdownItem,
  Dropdown, DropdownToggle
} from "reactstrap"
import { User, Bookmark, LogOut } from 'react-feather'

const UserPhotoDropdown = ({ className, userImage, signOut, photoSize }) => {
  // state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={cls(className, "relative font-urbanist")}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        {/* toggle */}
        <DropdownToggle className="relative bg-transparent !border-transparent p-0" >
          <Image
            src={userImage}
            width={photoSize}
            height={photoSize}
            className="rounded-full block"
            alt="profile"
          />
        </DropdownToggle>

        {/* menu */}
        <DropdownMenu end={true}>
          <DropdownItem className="py-3">
            <Link href="/my-profile" className="text-gray-600 no-underline">
              <User className="inline" width={20} height={20} />
              <span className="ml-[1rem]">My Profile</span>
            </Link>
          </DropdownItem>

          <DropdownItem className="py-3">
            <Link href="/saved" className="text-gray-600 no-underline">
              <Bookmark className="inline" width={20} height={20} />
              <span className="ml-[1rem]">Saved</span>
            </Link>
          </DropdownItem>

          <DropdownItem divider />

          <DropdownItem
            className="text-gray-600 py-3"
            onClick={() => {
              setDropdownOpen(false)
              signOut()
            }}
          >
            <LogOut className="inline" width={20} height={20} />
            <span className="ml-[1rem] no-underline">Sign out</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default UserPhotoDropdown