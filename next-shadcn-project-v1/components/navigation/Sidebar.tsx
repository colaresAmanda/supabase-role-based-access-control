'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()

  // Return nothing if path includes /auth
  if (pathname?.includes('/auth')) {
    return null
  }
  return <div>Sidebar</div>
}

export default Sidebar
