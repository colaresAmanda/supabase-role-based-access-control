'use client'
import {
  IconLayoutDashboard,
  IconNotes,
  IconSettings,
  IconUfo,
  IconUsers,
} from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  const pathname = usePathname()

  // Return nothing if path includes /auth
  if (pathname?.includes('/auth')) {
    return null
  }
  return (
    <div className="w-64 h-screen fixed top-0  z-50 left-0 bg-background  p-4 shadow">
      <div className="flex items-center gap-1">
        <IconUfo className="w-8 h-8 text-primary" />
        <h2 className="text-lg font-bold">SupabaseRBAC</h2>
      </div>

      <div className='mt-8'>
        <ul className='flex flex-col gap-2'>
          <SidebarItem icon={<IconLayoutDashboard />} title="Dashboard" link="/dashboard" />
          <SidebarItem icon={<IconUsers />} title="Users"  link="/users"/>
          <SidebarItem icon={<IconNotes />} title="Activity log"  />
          <SidebarItem icon={<IconSettings />} title="Settings"  />
          <SidebarItem  isThemeSelector={true} />

         
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
