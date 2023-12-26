'use client'

import { SessionProvider } from 'next-auth/react'
import {RecoilRoot} from 'recoil'

const Provider = ({ children, session }) => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </RecoilRoot>
  )
}

export default Provider