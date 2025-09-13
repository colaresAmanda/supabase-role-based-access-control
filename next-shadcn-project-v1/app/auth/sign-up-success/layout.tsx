import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {children}
    </div>
  )
}

export default Layout