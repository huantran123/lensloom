'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cls from 'classnames'
// components
import Hamburger from './Hamburger'

const LeftItems = ({ className }) => {
  // get path name
  const pathName = usePathname()

  return (
    <div className={cls(className, "flex items-center")}>
      {/* hamburger menu for mobile */}
      <Hamburger className="sm:hidden" />

      <Link href="/" className="ml-[0.5rem] sm:ml-0 hover:opacity-70">
        <img
          src="/assets/images/logo.svg"
          alt="LensLoom Logo"
          className='md:hidden h-8 w-fit object-contain'
        />
        <img
          src="/assets/images/logomark.svg"
          alt="LensLoom Logo"
          className='hidden md:block h-8 w-fit object-contain'
        />
      </Link>

      {/* navigation links */}
      <div className="hidden sm:block ml-[2rem]">
        <Link
          href="/"
          className={cls("nav_link", {
            "active_nav_link": pathName === "/"
          })}
        >
          Feed
        </Link>
        <Link
          href="/explore"
          className={cls("nav_link ml-[1rem]", {
            "active_nav_link": pathName === "/explore"
          })}
        >
          Explore
        </Link>
      </div>
    </div>
  )
}

export default LeftItems