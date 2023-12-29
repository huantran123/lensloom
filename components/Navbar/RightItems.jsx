'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import cls from 'classnames'
import { Plus } from 'react-feather'
// components
import UserDropdown from './UserDropdown'

const RightItems = ({ className }) => {
  // states
  const {data: session} = useSession()
  const [providers, setProviders] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }
    setupProviders()
  }, [])

  return (
    <div className={cls(className, "flex justify-end items-center")}>
      {/* If user is not logged in */}
      {!session?.user &&
        <>
          {providers && Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              className="primary_btn text-nowrap"
              onClick={() => signIn(provider.id)}
            >
              Sign In
            </button>
          ))}
        </>
      }

      {/* If user is logged in */}
      {session?.user && (
        <>
          {/* Desktop navigation */}
          <div className="hidden sm:flex">
            {/* Create post button */}
            <Link href="/create-post" className="primary_btn text-nowrap">
              Create post <Plus width={20} height={20} className="text-gray-100 ml-[0.5rem] hidden md:block" />
            </Link>

            {/* user dropdown */}
            <UserDropdown className="ml-[0.5rem] md:ml-[1.5rem]" imageSize={40} userImage={session?.user.image} signOut={signOut} />
          </div>

          {/* Mobile navigation */}
          <div className="flex sm:hidden">
            {/* Create post button */}
            <Link href="/create-post">
              <Plus width={32} height={32} className="text-yellow-500"/>
            </Link>

            {/* user dropdown */}
            <UserDropdown className="ml-[0.5rem]" imageSize={32} userImage={session?.user.image} signOut={signOut} />
          </div>
        </>
      )}
    </div>
  )
}

export default RightItems